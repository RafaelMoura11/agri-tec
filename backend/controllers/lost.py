from flask import request
from flask_restplus import Resource, fields

from models.lost import LostModel
from schemas.lost import LostSchema

from server.instance import server

ITEM_NOT_FOUND = "Perda não encontrada."

lost_ns = server.lost_ns

lost_schema = LostSchema()
lost_list_schema = LostSchema(many=True)

lost = lost_ns.model('Lost', {
    "name": fields.String(),
    "email": fields.String(),
    "cpf": fields.String(),
    "latitude": fields.Float(),
    "longitude": fields.Float(),
    "type": fields.String(),
    "date": fields.String(),
    "event": fields.String()
})

class Lost(Resource):
    def get(self, id):
        lost_data = LostModel.find_by_id(id)
        if lost_data:
            return lost_schema.dump(lost_data)
        return {'message': ITEM_NOT_FOUND}, 404
    
    def delete(self, id):
        lost_data = LostModel.find_by_id(id)
        if lost_data:
            lost_data.delete_from_db()
            return 'Perda deletada!', 204
        return {'message': ITEM_NOT_FOUND}, 404

    @lost_ns.expect(lost)
    def put(self, id):
        lost_data = LostModel.find_by_id(id)
        lost_json = request.get_json()

        if lost_data:
            lost_data.name = lost_json['name']
            lost_data.email = lost_json['email']
            lost_data.cpf = lost_json['cpf']
            lost_data.latitude = lost_json['latitude']
            lost_data.longitude = lost_json['longitude']
            lost_data.type = lost_json['type']
            lost_data.date = lost_json['date']
            lost_data.event = lost_json['event']
        else:
            lost_data = lost_schema.load(lost_json)
            return {'message': ITEM_NOT_FOUND}, 404

        lost_data.save_to_db()
        return lost_schema.dump(lost_data), 200

class LostList(Resource):
    @lost_ns.doc('Pegue todos as perdas')
    def get(self):
        return lost_list_schema.dump(LostModel.find_all()), 200

    @lost_ns.expect(lost)
    @lost_ns.doc('Registre uma nova perda')
    def post(self):
        lost_json = request.get_json()
        lost_data = lost_schema.load(lost_json)

        lost_data.save_to_db()

        return lost_schema.dump(lost_data), 201