
const getFavorites = async(req,res) => {
    console.log(req.headers.userid)
    return res.status(200).json("favoriler")
    
}

const postFavorites = async(req,res) => {
    return res.status(200).json("eklenen favoriler ")
}

const deleteFavorites = async(req,res) => {
    return res.status(200).json("silinen favoriler")
}

module.exports = {
    getFavorites,postFavorites,deleteFavorites
}