// ASSIGNMENT

const mid1 = function(req, res, next){
    let header = req.headers["isFreeAppUser"]
    if(!header){
        header = req.headers["isfreeappuser"]
        next()
    }
    if(!header){
        res.send({msg: "The request is missing a mandatory header"})
    }
    req.isFreeAppUser = header;
    next();
}


module.exports.mid1 = mid1
