var log={
    info: function(info){
        console.log(`Info: ${info}`)
    },
    warn: function(warn){
        console.log(`warn ${warn}`)
    }
}

var data=[
    {id:1,name:"jt"},
    {id:2,name:"garg"}
]

//module.exports="hello world"
module.exports={data:data,log:log} //module is available to outside world

