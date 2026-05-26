from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from . import models
from .routes import menu, orders, payments

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="QueueLess Canteen API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(menu.router)
app.include_router(orders.router)
app.include_router(payments.router)


@app.get("/")
def root():
    return {"message": "QueueLess Canteen API Running"}