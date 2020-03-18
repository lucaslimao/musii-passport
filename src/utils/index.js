const jwt = require('jsonwebtoken')
const config = require('config')

const token = () => {
    return {
        get: async (key, value) => {

            try {

                logger.info(
                    `${logPrefix}[Token]; Gerando token; `,
                )

                return await jwt.sign({ [key]: value }, config.get('token.secret'), {
                    expiresIn: 86400
                });

            } catch (error) {
                throw new Error(`[Util][Token]:: ${error.message}`)
            }

        },
        verify: async (token) => {

            try {

                return await jwt.verify(token, config.get('token.secret'), (err, decoded) => {
            
                    if (err) {
                        throw err
                    }

                    return decoded.id

                })

            } catch (error) {
                throw new Error(`[Util][Token]:: ${error.message}`)
            }

        }
    }
}

module.exports = {
    token: token
}