from flask import Flask, redirect, jsonify, request, render_template, url_for
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)

app.secret_key = "1"
app.debug = True

def db_connection():
    db = sqlite3.connect('database.db')
    return db

@app.route("/")
def starting():
    return redirect(url_for("index"))

@app.route("/get_data")
def index():
    db = db_connection()
    cur = db.cursor()
    cur.execute("SELECT * FROM content")
    content = cur.fetchall()
    return jsonify(content)

@app.route("/add_data", methods=["POST"])
def add_data():
    db = db_connection()
    cur = db.cursor()
    data = request.json
    site = data.get("s")
    email = data.get("e")
    password = data.get("p")
    user_id = data.get("uid")
    
    cur.execute("INSERT INTO content (site, email, password, user_id) VALUES (?,?,?, ?)" , (site, email, password, user_id))
    db.commit()
    cur.close()
    db.close()
    return jsonify({"Message": "Saved!!"})

if __name__ == "__main__":
    app.run()