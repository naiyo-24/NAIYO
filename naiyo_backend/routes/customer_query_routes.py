from flask import Blueprint, request, jsonify
from models.customer_query import CustomerQuery
from models.db import sqlalchemy_db as db

customer_query_bp = Blueprint('customer_query_bp', __name__)

@customer_query_bp.route('/customer_query', methods=['POST'])
def create_customer_query():
	data = request.get_json()
	try:
		new_query = CustomerQuery(
			customer_name=data.get('customer_name'),
			cust_email=data.get('cust_email'),
			cust_phone=data.get('cust_phone'),
			query_subject=data.get('query_subject'),
			message=data.get('message')
		)
		db.session.add(new_query)
		db.session.commit()
		return jsonify({'message': 'Customer query submitted successfully.'}), 201
	except Exception as e:
		db.session.rollback()
		return jsonify({'error': str(e)}), 400
