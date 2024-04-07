/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth Model and Routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      sendOTP:
 *       type: object
 *       required:
 *         - mobile
 *       properties:
 *         mobile:
 *           type: string
 *           default: +98 
 */

/**
 * @swagger
 * /auth/send-otp:
 *    post:
 *     tags:
 *     - Auth
 *     summary: Login with OTP in this end-point
 *     requestBody:
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *           schema:
 *              $ref: "#/components/schemas/sendOTP"
 *        application/json:
 *           schema:
 *              $ref: "#/components/schemas/sendOTP"
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */