// call back function
function sample(param){

    return param('jt')
}

console.log(sample(function(name){return name}))