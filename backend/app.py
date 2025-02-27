from flask import Flask, jsonify, request
import socket
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_hostname():
    return socket.gethostname()

@app.route('/get_hostname', methods=['GET'])
def hostname():
    hostname = get_hostname()
    return jsonify({"hostname": hostname})

if __name__ == '__main__':
    app.run(debug=True)
