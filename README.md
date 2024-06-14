# App-deteksi-penyakit-kulit

### load model menggunakan method .loadGraphModel()

Perhatikan, kali ini kita menggunakan .loadGraphModel() untuk melakukan load model.  apa bedanya dengan menggunakan .loadLayersModel(). ???

TensorFlow yang menyatakan bahwa TensorFlow memiliki fleksibilitas sebab struktur data graph.

Model yang dikembangkan dan dieksport sebenarnya adalah SavedModel.

 **SavedModel** adalah **format pada TensorFlow** yang menyimpan TensorFlow program secara utuh, termasuk parameter, seperti tf.Variable, arsitektur model, dan sebagainya. 

**Anda bisa simpulkan bahwa SavedModel menyimpan TensorFlow graph.**


Anda bisa umpamakan jika tim ML mengembangkan model menggunakan TensorFlow Python lalu disimpan sebagai SavedModel dan mengonversinya menjadi TensorFlow.js model (.json dan .bin), seringkali terjadi beberapa kesalahan yang muncul karena beberapa API TensorFlow Python tidak tersedia pada TensorFlow lainnya, seperti TFLite atau TensorFlow.js. 

**Jadi, SavedModel bisa digunakan sebagai salah satu solusi untuk menangani ini.**
