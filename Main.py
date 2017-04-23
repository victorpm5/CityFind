import Config, ComputerVision, Twilio, os
from random import choice
from string import ascii_lowercase, digits
from flask import Flask, render_template, jsonify, flash, redirect, request, url_for, send_file

UPLOAD_FOLDER = './img/'
RANDOM_NAME = ascii_lowercase + digits
NAME_LENGTH = 32

app = Flask(__name__)
app.config.from_object(Config)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['RANDOM_NAME'] = RANDOM_NAME
app.config['NAME_LENGTH'] = NAME_LENGTH
app.secret_key = "BIENE_HACKUPC"


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create-game')
def create_game():
    return render_template('createGame.html')


@app.route('/join-game')
def join_game():
    return render_template('joinGame.html')


@app.route('/get_pic', methods=['GET', 'POST'])
def get_pic():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            redirect(request.url)
        filereq = request.files['file']
        if filereq.filename == '':
            flash('No selected file')
            redirect(request.url)
        if filereq:
            filename = os.path.join(app.config['UPLOAD_FOLDER'], ''.join(choice(app.config['RANDOM_NAME']) for i in range(app.config['NAME_LENGTH'])))
            filereq.save(filename)
            return redirect(filename)
    return render_template('getPic.html')


@app.route('/img/<img>')
def get_img(img):
    return send_file(UPLOAD_FOLDER + img, mimetype='image/jpeg')

if __name__ == '__main__':
    app.run()
