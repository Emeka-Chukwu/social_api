import UserRepository from '../repositories,/users_repository'
exports.registerUser = async (req, res, next)=>{
try{
    let user = await UserRepository.register(req, res, next);
    console.log(user)

}catch(error){
    if(!error.statusCode) error.statusCode = 500;
    next(error);
}
}


exports.loginUser = async (req, res, next)=>{
try{
    let user = await UserRepository.login(req, res, next);
    console.log(user)

}catch(error){
    if(!error.statusCode) error.statusCode = 500;
    console.log(error);
   return res.status(error.statusCode).json({error});
    // throw error
    // next(error);
}
}