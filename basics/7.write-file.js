const fs=require("fs")


//overwrite
fs.writeFile("text.txt","hellooooooo",function(err){
    if(err){
        throw err
    }
    else{
        console.log("success")
    }
    })

//append

fs.appendFile("text.txt","\n again",function(err){
    if(err){
        throw err
    }
    else{
        console.log("success")
    }
    })


    