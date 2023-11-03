"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import json
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/sign_up', methods=['POST'])
def handle_new_user():

    body= json.loads(request.data)
    new_user= User(
        email= body["email"],
        user_name= body["user_name"],
        password= body["password"],
        is_admin= False
    ) 
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg":"usuario creado con exito"}), 200