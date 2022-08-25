from ma import ma
from models.lost import LostModel


class LostSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = LostModel
        load_instance = True