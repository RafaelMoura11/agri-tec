from flask import request
from flask_restplus import Resource, fields

from models.lost import LostModel
from schemas.lost import LostSchema

from server.instance import server

ITEM_NOT_FOUND = "Book not found."

lost_ns = server.lost_ns

lost_schema = LostSchema()
lost_list_schema = LostSchema(many=True)

class Lost(Resource):
    def get(self, id):
        lost_data = LostModel.find_by_id(id)
        if lost_data:
            return lost_schema.dump(lost_data)
        return {'message': ITEM_NOT_FOUND}, 404