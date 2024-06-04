
const getFavorites = async(req,res) => {
    if(req.headers.userid) return res.status(200).json("favoriler")
    else return res.status(404).json("not found")
}

const postFavorites = async(req,res) => {
    if(req.headers.userid) return res.status(200).json("eklenen favoriler ") 
    else return res.status(404).json("not found")
    
}

const deleteFavorites = async(req,res) => {
    return res.status(200).json("silinen favoriler")
}

module.exports = {
    getFavorites,postFavorites,deleteFavorites
}