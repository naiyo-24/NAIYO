from flask import Blueprint, jsonify
from models.service_master import ServiceMaster

service_master_bp = Blueprint('service_master_bp', __name__)


# Example route (can be expanded later)
@service_master_bp.route('/service_master/ping', methods=['GET'])
def ping():
	return {'message': 'service_master blueprint active'}


# GET API to fetch all columns where main_service == 'MISC'
@service_master_bp.route('/service_master_miscservices', methods=['GET'])
def get_service_master_misc_services():
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

# GET API to fetch all columns where main_service == 'Web Development Services'
@service_master_bp.route('/service_master_web-development-services', methods=['GET'])
def get_service_master_webdevelopment_services():
	records = ServiceMaster.query.filter_by(main_service='Web Development Services').all()
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

# GET API to fetch all columns where main_service == 'Mobile Application Services'
@service_master_bp.route('/service_master_mobile-application-services', methods=['GET'])
def get_service_master_mobile_application_services():
	records = ServiceMaster.query.filter_by(main_service='Mobile Application Services').all()
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

# GET API to fetch all columns where main_service == 'Servers & Hosting Services'
@service_master_bp.route('/service_master_servers-and-hosting-services', methods=['GET'])
def get_service_master_servers_and_hosting_services():
	records = ServiceMaster.query.filter_by(main_service='Servers & Hosting Services').all()
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

# GET API to fetch all columns where main_service == 'Professional Email Services'
@service_master_bp.route('/service_master_professional-email-services', methods=['GET'])
def get_service_master_professional_email_services():
	records = ServiceMaster.query.filter_by(main_service='Professional Email Services').all()
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

# GET API to fetch all columns where main_service == 'Domain Registration Services'
@service_master_bp.route('/service_master_domain-registration-services', methods=['GET'])
def get_service_master_domain_registration_services():
	records = ServiceMaster.query.filter_by(main_service='Domain Registration Services').all()
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

# GET API to fetch all columns where main_service == 'Marketing Services'
@service_master_bp.route('/service_master_marketing-services', methods=['GET'])
def get_service_master_marketing_services():
	records = ServiceMaster.query.filter_by(main_service='Marketing Services').all()
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

# GET API to fetch all columns where main_service == 'Business Solution Services'
@service_master_bp.route('/service_master_business-solution-services', methods=['GET'])
def get_service_master_business_solution_services():
	records = ServiceMaster.query.filter_by(main_service='Business Solution Services').all()
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

# GET API to fetch all columns where main_service == 'Logo & Branding Services'
@service_master_bp.route('/service_master_logo-and-branding-services', methods=['GET'])
def get_service_master_logo_and_branding_services():
	records = ServiceMaster.query.filter_by(main_service='Logo & Branding Services').all()
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

# GET API to fetch all columns where main_service == 'SEO Services'
@service_master_bp.route('/service_master_seo-services', methods=['GET'])
def get_service_master_seo_services():
	records = ServiceMaster.query.filter_by(main_service='SEO Services').all()
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

# GET API to fetch all columns where main_service == 'Market Research Services'
@service_master_bp.route('/service_master_market-research-services', methods=['GET'])
def get_service_master_market_research_services():
	records = ServiceMaster.query.filter_by(main_service='Market Research Services').all()
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

# GET API to fetch only unique main service names
@service_master_bp.route('/service_master_unique_main_services', methods=['GET'])
def get_unique_main_services():
	# Query distinct main_service values
	unique_services = ServiceMaster.query.with_entities(ServiceMaster.main_service).distinct().all()
	# Flatten result to a list of strings
	result = [s.main_service for s in unique_services if s.main_service]
	return jsonify(result)