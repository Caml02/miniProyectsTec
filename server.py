from flask import Flask, request, jsonify
from flask_cors import CORS
from num2words import num2words
import requests
from bs4 import BeautifulSoup
import random

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

# HangMan Game

words = ["PYTHON", "JAVASCRIPT", "HTML", "CSS", "JAVA", "RUBY", "PHP"]
word = random.choice(words)
guessed_letters = []
max_attempts = 5

@app.route('/get_word', methods=['GET'])
def get_word():
    return jsonify({"word": word})

@app.route('/guess', methods=['POST'])
def guess_letter():
    data = request.get_json()
    letter = data["letter"].upper()

    if letter in guessed_letters:
        response = {"message": "Ya has adivinado esa letra. Intenta con otra."}
    elif len(letter) > 1 or not letter.isalpha():
        response = {"message": "Ingresa una única letra válida."}
    else:
        guessed_letters.append(letter)
        if letter in word:
            response = {"message": "¡Adivinaste una letra correctamente!"}
        else:
            response = {"message": "La letra no se encuentra en la palabra."}

    response["guessed_letters"] = guessed_letters
    response["remaining_attempts"] = max_attempts - len([l for l in guessed_letters if l not in word])

    if response["remaining_attempts"] == 0 or set(word).issubset(set(guessed_letters)):
        response["game_over"] = True

    return jsonify(response)


if __name__ == '__main__':
    app.run()