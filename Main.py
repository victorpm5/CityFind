import Config, ComputerVision, Twilio
from flask import Flask, render_template

app = Flask(__name__)
app.config.from_object(Config)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create-game')
def create_game():
    return render_template('createGame.html')


@app.route('/join-game')
def join_game():
    return render_template('joinGame.html')


@app.route('/<gameId>/<userId>')
def room_game(gameId, userId):
    return render_template('roomGame.html')


if __name__ == '__main__':
    app.run()
