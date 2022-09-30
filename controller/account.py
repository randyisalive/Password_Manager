from flask import Blueprint, render_template, redirect, request
from PIL import Image
from route import APP_ROOT

account = Blueprint('account', __name__)


@account.route('/account')
def index():

    return render_template('account_details.html')
