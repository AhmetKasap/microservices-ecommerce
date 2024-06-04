const express = require('express')
const router = express.Router()

const proxy = require('express-http-proxy')
const { checkToken } = require('./src/middlewares/auth')



//!------------------ FAVORİTES SERVİCE --------------------------

//* ---- get favorites, add favorites, delete favorites ----

router.use('/api/v1/users/favorites', checkToken, proxy('http://localhost:5001/', {
    proxyReqPathResolver: (req) => {
      return req.originalUrl;
    },
    proxyReqOptDecorator: (proxyReqOpts, originalReq) => {
      //console.log(originalReq, proxyReqOpts)

      proxyReqOpts.headers['userId'] = originalReq.user._id
      return proxyReqOpts
    }
}))

//!------------------ BASKET SERVİCES --------------------------


router.use('/api/v1/users/basket', checkToken, proxy('http://localhost:5002/', {
    proxyReqPathResolver: (req) => {
      return req.originalUrl;
    },
    proxyReqOptDecorator: (proxyReqOpts, originalReq) => {
      //console.log(originalReq, proxyReqOpts)

      proxyReqOpts.headers['userId'] = originalReq.user._id
      return proxyReqOpts
    }
}))













module.exports = router

