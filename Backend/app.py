from flask import Flask
from flask_cors import CORS 
from routes import routes



app = Flask(__name__)

CORS(app, origins=["http://127.0.0.1:5501"], supports_credentials=True)


app.register_blueprint(routes)


if __name__ == "__main__":
    app.run(debug=True, port=5001) 