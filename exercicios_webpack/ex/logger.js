function info(text){
    //using ECMAscript 15 string template
    //refer to a variabel use ${var-name}
    console.log(`INFO: ${text}`)
}

//exporting object using ECMAscript 15 pattern
module.exports = {info}