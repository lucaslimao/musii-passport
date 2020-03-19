const { logger, utils } = require('musii-node-helper')

const passport = async (req, res,next) => {

    try {

        logger.info('[Passport] Verify access token.')

        const token = req.headers['x-access-token']

        logger.info(`[Passport] Token= ${token}`)

        if (!token) {
            return res.status(401).json({ error: 'Invalid credentials.' })
        }
    
        const authenticatedUserId = await utils.token().verify(token)

        req.authenticatedUserId = authenticatedUserId

        logger.info('[Passport] Finish verify acess token.')

        return next()

    } catch (error) {

        error && logger.error(`[Passport] Failed; ${error.message}`)

        return res.status(500).json({ error: 'Authenticated fail.' })

    }

}

module.exports = passport