from flask import Blueprint, jsonify
from models.partner_companies import PartnerCompanies

partner_companies_bp = Blueprint('partner_companies_bp', __name__)

@partner_companies_bp.route('/partner_companies', methods=['GET'])
def get_partner_companies():
	records = PartnerCompanies.query.all()
	result = [
		{
			'initial': r.Initials,
			'name': r.name,
			'short_desc': r.short_desc,
			'color': r.color,
			'website': r.website
		} for r in records
	]
	return jsonify(result)
