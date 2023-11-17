from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, nullable=False)
    user_name = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "is_admin": self.is_admin,
            "user_name": self.user_name,
            # do not serialize the password, its a security breach
        }


class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    descripcion = db.Column(db.String(250), unique=False, nullable=False)
    precio = db.Column(db.Float, unique=False, nullable=False)
    imagen = db.Column(db.String(250), unique=True, nullable=False)

    def __repr__(self):
        return f'<Products {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "precio": self.precio,
            "imagen": self.imagen,
            # do not serialize the password, its a security breach
        }