const trim = function(){
    const str = "           *functionUp*         "
    console.log(str.trim())
}
const changetoLowerCase = function(){
    const str2 = "maNAsvI SHarMA"
    console.log(str2.toLowerCase())
}
const changetoUpperCase = function(){
    const str3 = "i am FRom rADoN BatCh"
    console.log(str3.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changetoUpperCase = changetoUpperCase