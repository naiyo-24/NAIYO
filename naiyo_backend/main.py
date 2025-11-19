# main.py
# Entry point for Naiyo24 backend Flask app
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# Example: Database connection string from .env
DATABASE_URL = os.getenv('DATABASE_URL')

# Register blueprints for routes (to be added later)
# from routes.example import example_bp
# app.register_blueprint(example_bp)

# Root route to verify backend is running
@app.route('/')
def index():
	return "Naiyo24 backend is running!"

if __name__ == "__main__":
	# Listen on port 5010 for local and Docker compatibility
	app.run(host='0.0.0.0', port=5010, debug=False)
