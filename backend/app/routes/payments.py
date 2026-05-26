from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import razorpay
import os
from dotenv import load_dotenv
from ..database import get_db
from ..models import Order

load_dotenv()

router = APIRouter(prefix="/payments", tags=["Payments"])

client = razorpay.Client(
    auth=(
        os.getenv("RAZORPAY_KEY_ID"),
        os.getenv("RAZORPAY_KEY_SECRET")
    )
)


@router.post("/create-order")
def create_payment_order(data: dict):
    amount = int(data["amount"] * 100)

    payment = client.order.create({
        "amount": amount,
        "currency": "INR",
        "payment_capture": 1
    })

    return payment


@router.post("/mark-paid/{order_number}")
def mark_order_paid(order_number: str, db: Session = Depends(get_db)):
    order = db.query(Order).filter(
        Order.order_number == order_number
    ).first()

    if not order:
        return {"error": "Order not found"}

    order.payment_status = "paid"
    db.commit()

    return {"message": "Payment updated"}