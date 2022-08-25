from db import db
from typing import List


class LostModel(db.Model):
    __tablename__ = "losts"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False, unique=True)
    email = db.Column(db.String(80), nullable=False, unique=True)
    cpf = db.Column(db.String(80), nullable=False, unique=True)
    latitude = db.Column(db.Float, nullable=False)
    longitude = db.Column(db.Float, nullable=False)
    type = db.Column(db.String(20), nullable=False)
    date = db.Column(db.Date, nullable=False)
    event = db.Column(db.String(20), nullable=False)

    def __init__(self, name, email, cpf, latitude, longitude, type, date, event):
        self.name = name
        self.email = email
        self.cpf = cpf
        self.latitude = latitude
        self.longitude = longitude
        self.type = type
        self.date = date
        self.event = event

    def __repr__(self):
        return f'''LostModel(
            name={self.name},
            email={self.email},
            cpf={self.cpf},
            latitude={self.latitude},
            longitude={self.longitude},
            type={self.type},
            date={self.date},
            event={self.event},
            )'''

    def json(self):
        return {
            "name": self.name,
            "email": self.email,
            "cpf": self.cpf,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "type": self.type,
            "date": self.date,
            "event": self.event
        }
    @classmethod
    def find_all(cls) -> List["LostModel"]:
        return cls.query.all()

    @classmethod
    def find_by_id(cls, _id) -> "LostModel":
        return cls.query.filter_by(id=_id).first()

    def save_to_db(self) -> None:
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self) -> None:
        db.session.delete(self)
        db.session.commit()