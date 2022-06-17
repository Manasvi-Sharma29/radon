const axios = require('axios')

const getMeme = async function(req, res){
    try{
       let id = req.query.template_id
       let text0 = req.query.text0
       let text1 = req.query.text1
       let username = req.query.username
       let password = req.query.password
       let object = {
                        method:"post",
                        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
                    }
    let result = await axios (object)
    let data = result.data
    res.status(200).send({data})
    }
    catch(error){
        console.log(error)
        res.status(500).send({msg:error.message})
    }
}

module.exports.getMeme = getMeme

