import jwt from "jsonwebtoken"
export const generateToken=async(userId,res)=>{
const token= jwt.sign({userId},process.env.JWTSECRET,{expiresIn:'15d'})
await res.cookie('jwt',token,{
    maxAge:15*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",

})
}

    