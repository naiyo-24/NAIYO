# routes/about_naiyo_routes.py
# API endpoints for AboutNaiyo table
from flask import Blueprint, request, jsonify
from models.about_naiyo import db, AboutNaiyo

about_naiyo_bp = Blueprint('about_naiyo', __name__)

# GET all about_naiyo records
@about_naiyo_bp.route('/about_naiyo', methods=['GET'])
def get_about_naiyo():
	records = AboutNaiyo.query.all()
	result = [
		{
			'id': r.id,
			'name': r.name,
			'address': r.address,
			'phone': r.phone,
			'landline': r.landline,
			'email': r.email,
			'website': r.website,
			'about_us': r.about_us,
			'ceo_name': r.ceo_name,
			'ceo_message': r.ceo_message,
			'mission': r.mission,
			'vision': r.vision,
			'business_hours': r.business_hours
		} for r in records
	]
	return jsonify(result)

# POST a new about_naiyo record
@about_naiyo_bp.route('/about_naiyo', methods=['POST'])
def create_about_naiyo():
	data = request.get_json()
	new_record = AboutNaiyo(
		name=data.get('name'),
		address=data.get('address'),
		phone=data.get('phone'),
		landline=data.get('landline'),
		email=data.get('email'),
		website=data.get('website'),
		about_us=data.get('about_us'),
		ceo_name=data.get('ceo_name'),
		ceo_message=data.get('ceo_message'),
		mission=data.get('mission'),
		vision=data.get('vision'),
		business_hours=data.get('business_hours')
	)
	db.session.add(new_record)
	db.session.commit()
	return jsonify({'message': 'Record created', 'id': new_record.id}), 201
