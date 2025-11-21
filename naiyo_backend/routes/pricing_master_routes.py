
from flask import Blueprint, jsonify
from models.pricing_master import PricingMaster

pricing_master_bp = Blueprint('pricing_master_bp', __name__)

@pricing_master_bp.route('/pricing_master', methods=['GET'])
def get_pricing_master():
	records = PricingMaster.query.all()
	result = []
	for record in records:
		result.append({
			'id': record.id,
			'main_service': record.main_service,
			'service_pack_details': record.service_pack_details
		})
	return jsonify(result)
