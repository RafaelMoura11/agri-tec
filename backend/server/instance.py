from flask import Flask, Blueprint
from flask_restplus import Api
from flask_cors import CORS

class Server():
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app)
        self.bluePrint = Blueprint('api', __name__, url_prefix='/api')
        self.api = Api(self.bluePrint, title='Softfocus Test')
        self.app.register_blueprint(self.bluePrint)

        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
        self.app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        self.app.config['PROPAGATE_EXCEPTIONS'] = True

        self.lost_ns = self.lost_ns()

        super().__init__()

    def lost_ns(self, ):
        return self.api.namespace(name='Softfocus', path='/')

    def run(self, ):
        self.app.run(
            port=5000,
            debug=True,
            host='0.0.0.0'
        )


server = Server()
