
from flask import Blueprint, jsonify
from models.pricing_master import PricingMaster

pricing_master_bp = Blueprint('pricing_master_bp', __name__)

@pricing_master_bp.route('/pricing_master', methods=['GET'])
def get_pricing_master():
	"""
	Get all pricing_master records.
	Returns a list of all pricing data for all main services.
	"""
	records = PricingMaster.query.all()
	result = []
	for record in records:
		result.append({
			'id': record.id,
			'main_service': record.main_service,
			'service_pack_1': record.service_pack_1,
			'service_pack_2': record.service_pack_2,
			'service_pack_3': record.service_pack_3,
			'service_pack_4': record.service_pack_4,
			'service_pack_5': record.service_pack_5,
			'service_pack_6': record.service_pack_6,
			'service_pack_7': record.service_pack_7,
			'service_pack_8': record.service_pack_8,
			'service_pack_9': record.service_pack_9,
		})
	return jsonify(result)

# API to get pricing data for the main service 'Web Development Services'
@pricing_master_bp.route('/pricing_master_web-development-services', methods=['GET'])
def get_web_development_pricing():
	"""
	Get pricing_master data for the main service 'Web Development Services'.
	Returns a list of pricing data for only 'Web Development Services'.
	"""
	records = PricingMaster.query.filter_by(main_service="Web Development Services").all()
	result = []
	for record in records:
		result.append({
			'id': record.id,
			'main_service': record.main_service,
			'service_pack_1': record.service_pack_1,
			'service_pack_2': record.service_pack_2,
			'service_pack_3': record.service_pack_3,
			'service_pack_4': record.service_pack_4,
			'service_pack_5': record.service_pack_5,
			'service_pack_6': record.service_pack_6,
			'service_pack_7': record.service_pack_7,
			'service_pack_8': record.service_pack_8,
			'service_pack_9': record.service_pack_9,
		})
	return jsonify(result)
