const utils = require('./utils/index')
const repository = require('./repository/index')
const logger = require('./utils/logger/index')

let __model = undefined

const passport = async (req, res,next) => {

    try {

        logger.info('[Passport] Verify access token.')

        const token = req.headers['x-access-token']

        logger.info(`[Passport] Token= ${token}`)

        if (!token) {
            return res.status(401).json({ error: 'Invalid credentials.' })
        }
    
        const authenticatedUserId = await utils.token().verify(token)
    
        const authenticatedUser = await __model.findOne({ _id : authenticatedUserId, active: 'S'})
  
        req.authenticatedUser = authenticatedUser

        logger.info('[Passport] Finish verify acess token.')

        return next()

    } catch (error) {

        error && logger.error(`[Passport] Failed; ${error.message}`)

        return res.status(500).json({ error: 'Authenticated fail.' })

    }

}

const authentication = () => {

    const model = repository().get('User')

    logger.info('[Passport] Getting model ')

    __model = model

}

module.exports = {
    authentication,
    passport
}