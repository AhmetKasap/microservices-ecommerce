
const getBasket = async(req,res) => {
    const id = req.headers.userId
    if(id) return res.status(200).json("log")

}

const postBasket = async(req,res) => {

}

module.exports = {
    getBasket, postBasket
}
