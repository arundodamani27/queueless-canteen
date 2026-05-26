from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import Order
from ..schemas import OrderCreate
import random

router = APIRouter(prefix="/orders", tags=["Orders"])


@router.post("/")
def create_order(order: OrderCreate, db: Session = Depends(get_db)):
    order_number = f"ORD{random.randint(1000,9999)}"

    new_order = Order(
        customer_name=order.customer_name,
        total_amount=order.total_amount,
        order_number=order_number,
        payment_status="pending",
        order_status="created"
    )

    db.add(new_order)
    db.commit()
    db.refresh(new_order)

    return new_order


@router.get("/{order_number}")
def get_order(order_number: str, db: Session = Depends(get_db)):
    order = db.query(Order).filter(
        Order.order_number == order_number
    ).first()

    if not order:
        return {"error": "Order not found"}

    return order