from flask import Flask, request, jsonify
from flask_cors import CORS
from num2words import num2words
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

#NumberToWords 

@app.route('/convert', methods=['POST'])
def convert_number():
    data = request.get_json()
    number = data["number"]
    result = num2words(number, lang='es')
    response = {"result": result}
    return jsonify(response)

#WebScrape

@app.route('/web_scraping', methods=['POST'])   
def web_scraping():
    data = request.get_json()
    url = data["url"]

    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    title = soup.find('title').text.strip()
    description = soup.find('meta', attrs={'name': 'description'})['content'].strip()
    links = [link.get('href') for link in soup.find_all('a') if link.get('href')]

    response = {
        'title': title,
        'description': description,
        'links': links
    }

    return jsonify(response)

#USSD Menu

@app.route('/menu', methods=['POST'])
def menu():
    data = request.get_json()
    option = data["option"]

    if option == "1":
        response = {"message": "Tu saldo es de $500."}
    elif option == "2":
        response = {"message": "Ingresa el número de cuenta y la cantidad a transferir."}
    elif option == "3":
        response = {"message": "Selecciona tu método de pago."}
    else:
        response = {"message": "Opción inválida. Por favor, selecciona una opción válida."}

    return jsonify(response)

# Ratinigs Top Movie
ratings = []

@app.route('/submit_rating', methods=['POST'])
def submit_rating():
    data = request.get_json()
    rating = data.get('rating')
    comments = data.get('comments')

    ratings.append({'rating': rating, 'comments': comments})

    return jsonify({'message': 'Rating submitted successfully.'})

@app.route('/get_ratings', methods=['GET'])
def get_ratings():
    return jsonify({'ratings': ratings})


if __name__ == '__main__':
    app.run()
