from flask import request
from flask_restplus import Resource, fields

from models.lost import LostModel
from schemas.lost import LostSchema

from server.instance import server

ITEM_NOT_FOUND = "Perda não encontrada."

lost_ns = server.lost_ns

lost_schema = LostSchema()
lost_list_schema = LostSchema(many=True)

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

class LostList(Resource):
    @lost_ns.doc('Get all the Items')
    def get(self):
        return lost_list_schema.dump(LostModel.find_all()), 200

    @lost_ns.doc('Create an Item')
    def post(self):
        lost_json = request.get_json()
        lost_data = lost_schema.load(lost_json)

        lost_data.save_to_db()

        return lost_schema.dump(lost_data), 201