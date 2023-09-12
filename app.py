from flask import Flask, redirect, jsonify, request, render_template
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.secret_key = "1"
app.debug = True

@app.route("/get_data")
def index():
    data = [
        [1, "google.com", "rfitra8@gmail.com", "rahmandi$1"], 
        [2, "google.com", "jr2shared@gmail.com", "jshared2"]
        ]
    return jsonify(data)

if __name__ == "__main__":
    app.run()