const User = require('../models/User')
const bcrypt = require('bcrypt')
const APIError = require('../utils/Error')
const Response = require('../utils/Response')
const authMiddlewares = require('../middlewares/auth')


const register = async (req, res) => {
    const checkUser = await User.findOne({ email: req.body.email })

    if (!checkUser) {
        const password = await bcrypt.hash(req.body.password, 10)

        const user = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password
        })
        await user.save()
            .then(savedUser => {return new Response(savedUser, 'Kayıt başarıyla oluşturuldu').created(res)})
            .catch((err) => {throw new APIError('Kayıt sırasında bir hata meydana geldi.', 500) })
    }
    else {
        return new Response(null, 'email zaten kullanımda !',).c_400(res)
    }
}

const login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })

    if (user && await bcrypt.compare(req.body.password, user.password)) {
        authMiddlewares.createToken(user, res) //* token oluşturuldu.
    }
    else  return new Response(null, 'Giriş Bilgileri Hatalı').c_400(res)    
}




module.exports = {
    register, login}