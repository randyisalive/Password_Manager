from flask import Flask, redirect, jsonify, request, render_template, url_for, session
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
def index():
    if not session:
        return redirect(url_for("admin_login"))
    db = db_connection()
    cur = db.cursor()
    cur.execute("SELECT * FROM users")
    users = cur.fetchall()
    cur.close()
    db.close()
    return render_template("index.html", users=users)

@app.route('/detail/<id>')
def detail(id):
    db = db_connection()
    cur = db.cursor()
    cur.execute("SELECT * FROM content WHERE user_id = ?", (id))
    content = cur.fetchall()
    cur.close()
    db.close()
    return render_template("detail.html", content=content)

@app.route("/login", methods=["POST", "GET"])
def login():
    db = db_connection()
    cur = db.cursor()
    cur.execute("SELECT * FROM users")
    users = cur.fetchall()
    data = request.json
    username = data.get("username")
    password = data.get("password")
    for user in users:
        if username == user[1] and password == user[2]:
            return jsonify(user)
    return jsonify({"Messages": "No user found!"})

@app.route('/admin/login', methods=["POST", "GET"])
def admin_login():
    return render_template('login/login.html')

@app.route("/get_data/<id>", methods=["POST"])
def get_data(id):
    db = db_connection()
    cur = db.cursor()
    data = request.json
    id = data.get('id')
    cur.execute("SELECT * FROM content WHERE user_id = ?", (id,))
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
    if site == "":
        print("Site empty")
        return None
    if email == "":
        print("Email is empty")
        return None
    if password == "":
        print("Password is empty")
        return None
    cur.execute("INSERT INTO content (site, email, password, user_id) VALUES (?,?,?, ?)" , (site, email, password, user_id))
    db.commit()
    cur.close()
    db.close()
    return jsonify({"Message": "Saved!!"})

if __name__ == "__main__":
    app.run()