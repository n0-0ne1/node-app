const events=require("events")
//console.log(events);

var em=new events.EventEmitter()

em.on("click",function(){
    console.log("invoked click event")
})

em.emit("click")

em.on("firstEvent",function(data){
    console.log("firstEvent: "+data);
})

em.emit("firstEvent","fired")