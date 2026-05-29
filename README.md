# QueueLess Canteen

QueueLess Canteen is a smart digital food ordering system designed to reduce long queues in college canteens during rush hours.

Students can browse the menu, place orders, make online payments, and receive a digital receipt for food collection.

---

## Features

- Digital menu browsing
- Add items to cart
- Online checkout
- Order generation
- Digital receipt generation
- Razorpay payment integration
- PostgreSQL database support
- Responsive user interface
- Fast and simple ordering process

---

## How It Works

1. Open QueueLess Canteen
2. Browse available menu items
3. Add food items to cart
4. Proceed to checkout
5. Complete payment
6. Receive digital receipt
7. Show receipt and collect food

---

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

### Backend
- FastAPI
- Python

### Database
- PostgreSQL

### Payment Gateway
- Razorpay

---

## Project Structure

```text
queueless-canteen/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── models.py
│   ├── database.py
│   └── requirements.txt
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/queueless-canteen.git
cd queueless-canteen
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt
```

Create `.env`

```env
DATABASE_URL=your_postgresql_url
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

Run backend

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

Run frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:3000
```

---

## Future Enhancements

- Student authentication
- Order tracking
- Admin dashboard
- Inventory management
- QR-based food collection
- Analytics dashboard
- Push notifications

---

## Use Case

QueueLess Canteen helps educational institutions reduce congestion at billing counters and improve food service efficiency during peak hours.

---

## Author

Arun Dodamani

MCA Student

SJEC

---

## License

This project is developed for educational and learning purposes.
