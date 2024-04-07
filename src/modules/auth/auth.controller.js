const AuthMassages = require("./auth.massages");
const authService = require("./auth.service");
const autoBind = require("auto-bind");

class AuthController {
    #service;
    
    constructor() {
        autoBind(this)
        this.#service = authService;
    }

    async sendOTP(req, res, next) {
        try {
            const { mobile } = req.body;
            await this.#service.sendOTP(mobile);
            return {
                massage: AuthMassages.sentOtpSuccess
            }

        } catch (err) {
            next(err)
        }
    }

    checkOTP(req, res, next) {
        try {

        } catch (err) {
            next(err)
        }
    }

}

module.exports = new AuthController()