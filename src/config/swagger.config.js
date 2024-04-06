const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");

const swaggerConfig = (app) => {
    const swaggerDocument = swaggerDoc({
        swaggerDefinition: {
            info: {
                title: "Radmehr Divar",
                description: "divar web for buy and sell anythings",
                version: "1.0.0"
            }
        },
        apis: []
    })

    const swagger = swaggerUi.setup(swaggerDocument ,{});
    app.use("/" ,swaggerUi.serve ,swagger)
}

module.exports = swaggerConfig