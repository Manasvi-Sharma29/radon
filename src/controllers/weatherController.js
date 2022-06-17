const axios = require('axios')

const getWeather = async function (req, res){
    try{
        let city = [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let appid = req.query.appid
        let place = []
        console.log(`these are the query params: ${city} ${appid}`)
        for(i=0; i<city.length; i++){

            let weather = {
                            method:"get",
                            url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=${appid}`
            }
            let result = await axios(weather)
            let data = result.data.main.temp
            let name = result.data.name
            place.push({"name":name, "temp":data})
            console.log(result)
            
    }
    place.sort((a, b) => a.temp - b.temp);
    res.status(200).send({place})
}
    catch(error){
        console.log(error)
        res.status(500).send({msg:error.message})
    }

}

module.exports.getWeather = getWeather