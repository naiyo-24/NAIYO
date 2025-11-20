
from flask import Blueprint, jsonify
from models.service_master import ServiceMaster

service_master_bp = Blueprint('service_master_bp', __name__)


# Example route (can be expanded later)
@service_master_bp.route('/service_master/ping', methods=['GET'])
def ping():
	return {'message': 'service_master blueprint active'}

# GET API to fetch all columns where main_service == 'MISC'
@service_master_bp.route('/service_master_miscservices', methods=['GET'])
def get_service_master_services():
	records = ServiceMaster.query.filter_by(main_service='MISC').all()
	result = [
		{
			'service_id': r.service_id,
			'main_service': r.main_service,
			'sub_service': r.sub_service,
			'service_logo': r.service_logo,
			'short_desc': r.short_desc,
			'long_desc': r.long_desc,
			'service_charge': r.service_charge
		} for r in records
	]
	return jsonify(result)
