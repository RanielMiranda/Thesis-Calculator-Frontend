# 📘 Thesis Derivative Calculator

A web-based derivative calculator that provides step-by-step solutions, explanations, and interactive learning tools.

# frontend:
Install the dependencies:
1. Clone the Repository
2. cd frontend
3. npm install
4. npx vite --port=4000 # Start the React development server

# backend:
1. Create a virtual environment
   
  python -m venv venv
  
2. Windows:
  venv\Scripts\activate

  macOS/Linux:
  source venv/bin/activate
  
3. Install required packages
   
  pip install pydantic fastapi sympy uvicorn
  
4. run your FastAPI app
uvicorn main:app --reload
