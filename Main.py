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


@app.route('/<game_id>/<user_id>')
def room_game(game_id, user_id):
    return render_template('roomGame.html', game_id=game_id, user_id=user_id)


if __name__ == '__main__':
    app.run()
