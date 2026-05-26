from pydantic import BaseModel


class MenuItemCreate(BaseModel):
    name: str
    price: float
    category: str
    available: bool = True


class MenuItemResponse(MenuItemCreate):
    id: int

    class Config:
        from_attributes = True

class OrderCreate(BaseModel):
    customer_name: str
    total_amount: float