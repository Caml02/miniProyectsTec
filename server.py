from flask import Flask, request, jsonify
from flask_cors import CORS
from num2words import num2words

app = Flask(__name__)
CORS(app)

@app.route('/convert', methods=['POST'])
def convert_number():
    data = request.get_json()
    number = data["number"]
    result = num2words(number, lang='es')
    response = {"result": result}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
