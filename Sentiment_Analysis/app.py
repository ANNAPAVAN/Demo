from flask import Flask,request,render_template

import tensorflow as tf


model=tf.keras.models.load_model('pavan_model')

app = Flask(__name__)

@app.route('/') 

def index():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])

def predict_package():
    data=(request.form.get('str1'))

    result = model.predict([[data]]);
    print(result)
    if(result>=0.5):
        result="Its a hit"
    else:
        result="Its a flop"
    # return str(result)
    
    return render_template("index.html",result = str(result))


if __name__ == '__main__':
    app.run(debug=True)
