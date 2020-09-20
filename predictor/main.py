from flask import Flask
from flask import request
from flask import jsonify
import load

app = Flask(__name__)

@app.route('/', methods=["GET"])
def hello_world():
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    return "Hello World!"

@app.route('/predictDiabetes', methods=["POST"])
def predictTest():
    diabetesData = request.json["diabetes"]
    cardioData = request.json["cardio"]
    diabetes = load.prediction_dibeties([[diabetesData["bmi"], diabetesData["sex"], diabetesData["age"]]])
    print(diabetes[0])
    print(diabetes[0][0][0])
    cardio = load.prediction_cardio([[cardioData["height"], cardioData["weight"], cardioData["age"]*365, cardioData["gender"], cardioData["active"], cardioData["parents"]]])
    print(cardio)
    print({"result": diabetes[0][0][0], "confidence": diabetes[1]})
    print({"result": cardio[0][0][0], "confidence": cardio[1]})
    return jsonify({"diabetes": {"result": int(diabetes[0][0][0]), "confidence": int(diabetes[1])}, "cardio": {"result": int(cardio[0][0][0]), "confidence": int(cardio[1])}})
    # return jsonify({"diabetes": 1})
