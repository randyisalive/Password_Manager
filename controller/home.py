import re
from flask import (
    Blueprint, flash, render_template, request, session, url_for, redirect
)
from db import db_connection
from services.home import *


home = Blueprint('home', __name__)


@home.route('/', methods=['POST', 'GET'])
def index():
    id = session.get('id')
    if id is None:
        return redirect(url_for('auth.login'))
    content = list_all_content(id)
    return render_template('index.html', id=id, content=content)


@home.route('/delete/<content_id>', methods=['GET'])
def delete(content_id):
    content_id = delete_password_by_id(content_id)
    id = content_id
    return redirect(url_for('home.index'))


@home.route('/logout', methods=['POST', 'GET'])
def logout():
    session.clear()
    return redirect(url_for('auth.login'))


@home.route('/add-pass', methods=['POST', 'GET'])
def add_pass():
    id = session.get('id')
    password_add = request.args.get('user_password')
    if request.method == 'POST':
        site = request.form['site']
        username = request.form['a']
        password = request.form['ab']
        db = db_connection()
        cur = db.cursor()
        params = (site, username, password, id)
        cur.execute(
            'INSERT INTO content (site, username_site, password_site, user_id) VALUES (?,?,?, ?)', params)
        db.commit()
        cur.close()
        db.close()
        return redirect(url_for('home.index', id=id))
    return render_template('form.html', id=id, password_add=password_add)


@ home.route('/data/', methods=['POST', 'GET'])
def data():
    id = request.args.get('id')
    total = get_total_user_content(id)
    return render_template('data.html', total=total)


@ home.route('/edit/<id>', methods=['POST', 'GET'])
def edit(id):
    content = get_content_by_id(id)
    error = ''
    if request.method == 'POST':
        pass

    return render_template('edit.html', id=id, content=content)
