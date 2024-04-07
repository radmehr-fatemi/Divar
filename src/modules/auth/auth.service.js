const autoBind = require("auto-bind");
const ModelUser = require("../user/user.model");
const { randomInt } = require("crypto");
const createHttpError = require("http-errors");
const AuthMassages = require("./auth.massages");

class AuthService {
    #model;

    constructor() {
        autoBind(this)
        this.#model = ModelUser;
    }

    async sendOTP(mobile) {
        const user = await this.#model.findOne({ mobile });

        const now = new Date().getTime();
        const code = randomInt(10000, 99999);
        const otp = {
            code,
            expiresIn: now + (1000 * 60 * 2)
        }

        if (!user) {
            const newUser = await this.#model.create({ mobile, otp })
            return newUser
        }

        if (!user?.otp > now) throw new createHttpError.BadRequest(AuthMassages.expiresOtp);

        user.otp = otp;
        await user.save()
        return user
    }

    checkOTP(mobile, code) {
    }

}

module.exports = new AuthService()