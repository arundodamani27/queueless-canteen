from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import MenuItem
from ..schemas import MenuItemCreate

router = APIRouter(prefix="/menu", tags=["Menu"])


@router.post("/")
def create_menu_item(item: MenuItemCreate, db: Session = Depends(get_db)):
    menu_item = MenuItem(**item.model_dump())
    db.add(menu_item)
    db.commit()
    db.refresh(menu_item)
    return menu_item


@router.get("/")
def get_menu(db: Session = Depends(get_db)):
    return db.query(MenuItem).all()