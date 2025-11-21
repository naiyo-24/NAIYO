from models.db import sqlalchemy_db as db

class PricingMaster(db.Model):
	__tablename__ = 'pricing_master'

	id = db.Column(db.Integer, primary_key=True)
	main_service = db.Column(db.String(128), nullable=False)
	service_pack_details = db.Column(db.Text, nullable=False)