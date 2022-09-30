from flask import Blueprint, session, redirect, render_template, flash, url_for, request
from db import db_connection


auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    error = ''
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        conn = db_connection()
        cur = conn.cursor()
        params = (email, password)
        sql = "SELECT id, email, username, password FROM users WHERE email = '%s' AND password = '%s'" % params
        cur.execute(sql)
        user = cur.fetchone()
        if user is None:
            error = 'Wrong username or password'
        else:

            session.clear()
            session['id'] = user[0]
            session['username'] = user[2]
            session['email'] = user[1]
            return redirect(url_for('home.index'))
        flash(error)
        cur.close()
        conn.close()
    return render_template('login.html', error=error)


@auth.route('/signup', methods=['POST', 'GET'])
def signup():
    error = ''
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['username']
        password = request.form['password']
        db = db_connection()
        cur = db.cursor()
        params = (email, username, password)
        cur.execute(
            "SELECT * FROM users WHERE username = ? AND email = ?", (username, email))
        user = cur.fetchone()
        cur.close()
        db.close()
        if user is None:
            cur.execute(
                "INSERT INTO users (email,username, password) VALUES (?,?,?)", params)
            db.commit()
            cur.close()
            db.close()
            return redirect(url_for('auth.login'))
        else:
            error = "User already exist!!!"
            flash(error)
            return redirect(url_for('auth.login', error=error))
    return render_template('signup.html')
