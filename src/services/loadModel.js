const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const MODEL_URL = "file://models/model.json" //path model

    return tf.loadGraphModel(MODEL_URL);
}

module.exports = loadModel; 