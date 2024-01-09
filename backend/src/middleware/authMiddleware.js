const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

const authMiddleware = (req,res,next)=>{
    const token = req.headers.token.split(" ")[1]
    
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if(err){
            return res.status(404).json({
                message:"The authentication",
                status: "ERR"
            })
        }
        if(user?.isAdmin){
            next()
        }else{
            return res.status(404).json({
                message:"The authentication",
                status: "ERR"
            })
        }
    });
}

const authUserMiddleware = (req, res, next) => {
    if(!req.cookies?.refresh_token){
        return res.status(200).send({
            message:''
        })
    }
    const token = req.cookies.refresh_token
    const userId = req.params.id
    jwt.verify(token, process.env.SECRET_KEY, function (err, user) {
        if (err) {
            return res.status(200).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
        if (user?.isAdmin || user?.id === userId) {
            next()
        } else {
            return res.status(200).json({
                message: 'The authemtication',
                status: 'ERROR'
            })
        }
    });
}

module.exports = {
    authMiddleware,
    authUserMiddleware
}