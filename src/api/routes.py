"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Products
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


@api.route('/login', methods=['POST'])
def login():

    email= request.json.get("email", None)
    password= request.json.get("password", None)
    user= User.query.filter_by(email=email).first()
    if user is None: 
        return jsonify({"msg":"user not found" }) , 404
    return jsonify({"msg":"usuario logueado con exito"}), 200
    
@api.route('/products', methods=['GET'])
def get_products():
    products= Products.query.all()
    if not products:
        return jsonify([])
    serialized_products= [products.serialized() for product in products]
    return jsonify(serialized_products)