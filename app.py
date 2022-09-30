
from flask import Flask
from flask_debugtoolbar import DebugToolbarExtension
from controller.home import *
from controller.auth import *
from controller.account import *
from controller.generator import *

app = Flask(__name__)


app.secret_key = '1'
app.debug = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)


app.register_blueprint(home, url_prefix='/')
app.register_blueprint(auth, url_prefix='/')
app.register_blueprint(account, url_prefix='/')
app.register_blueprint(generator, url_prefix='/')


if __name__ == '__main__':
    app.run()
