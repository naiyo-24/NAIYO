# main.py
# Entry point for Naiyo24 backend Flask app
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)

# Example: Database connection string from .env
# DATABASE_URL = os.getenv('DATABASE_URL')
DATABASE_URL = (
    f"postgresql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}:{os.getenv('DB_PORT')}/{os.getenv('DB_NAME')}"
)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy()
from models.about_naiyo import db
from routes.about_naiyo_routes import about_naiyo_bp

db.init_app(app)
app.register_blueprint(about_naiyo_bp)

with app.app_context():
    db.create_all()  # Auto-create tables if not present

# Root route to verify backend is running
@app.route('/')
def index():
	return "Naiyo24 backend is running!"

if __name__ == "__main__":
	# Listen on port 5010 for local and Docker compatibility
	app.run(host='0.0.0.0', port=5010, debug=False)
