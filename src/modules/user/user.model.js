const { Schema, models, model } = require("mongoose");

const OTPSchema = new Schema({
    code: { type: String, required: false, default: undefined },
    expiresIn: { type: Number, required: false, default: 0 },
})

const UserSchema = new Schema({
    fulName: { type: String, required: false },
    phone: { type: String, required: false, unique: false },
    otp: { type: OTPSchema },
    phone: { type: String, required: false, unique: false },
    verifyMobile: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
}
);

const ModelUser = new model("UserD", UserSchema);

module.exports = ModelUser