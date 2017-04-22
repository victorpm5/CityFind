import Config, ComputerVision
from flask import Flask,  render_template

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def index():
    ComputerVision.analize()
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
