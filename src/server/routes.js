const postPredict = require("../server/controllers");

postPredict

const routes = [
    {
        path:'/',
        method: "GET",
        handler: () => {
            console.log('welcome to mamang coders');
        },
    },
    {
        path:'/predict',
        method: "POST",
        handler: postPredict,
        options: {
            payload: {
                 /*Mengizinkan data berupa gambar*/
                allow:  'multipart/form-data',
                multipart: true
            }
        }
    }
]

module.exports = routes;