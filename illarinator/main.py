import os

from flask import Flask, render_template

from generator.generator import Illarinator


app = Flask(__name__)
generator = Illarinator()


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/generate')
def generate():
    return generator.generate()
