const fs=require("fs")


//asyncronous
console.log("1 async");
fs.readFile("text.txt",function(err,data){
if(err){
    throw err
}
else{
    console.log(data.toString(),"async")
}
})

console.log("2 async");



//syncronous 
console.log("1");
console.log(fs.readFileSync("text.txt","UTF-8"));
console.log("2");
