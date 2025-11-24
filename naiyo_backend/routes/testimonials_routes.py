from flask import Blueprint, jsonify
from models.testimonials import Testimonial

testimonials_bp = Blueprint('testimonials_bp', __name__)

# GET API to fetch all testimonials
@testimonials_bp.route('/get_testimonials', methods=['GET'])
def get_all_testimonials():
	records = Testimonial.query.all()
	result = [
		{
			'id': r.id,
			'name': r.name,
			'role': r.role,
			'company': r.company,
			'content': r.content,
			'rating': r.rating
		} for r in records
	]
	return jsonify(result)
