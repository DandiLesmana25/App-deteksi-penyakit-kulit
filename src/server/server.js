const Hapi = require('@hapi/hapi');
const routes = require('../server/routes');


(async () => {

    
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*'],
            },
        },
    })

    // server.route([
    //     {
    //         path:'/',
    //         method: 'GET'
    //         handler: () => {
    //             console.log('aman');
    //         }
    //     }
    // ]);
    
    server.route(routes);  

    // server.ext('onPreResponse', function (request, h) {
    //     const response = request.response;
    //     if (response instanceof InputError) {
    //         const newResponse = h.response({
    //             status: 'fail',
    //             message: `${response.message} Silakan gunakan foto lain.`
    //         })
    //         newResponse.code(response.statusCode)
    //         return newResponse;
    //     }
    //     if (response.isBoom) {
    //         const newResponse = h.response({
    //             status: 'fail',
    //             message: response.message
    //         })
    //         newResponse.code(response.statusCode)
    //         return newResponse;
    //     }
    //     return h.continue;
    // });
    await server.start();
    console.log(`Server start at: ${server.info.uri}`);
})();