const EventsModules = require("events")
/* const events = require("events")
const EventEm=events.EventEmitter(); */

const event = new EventsModules();

event.on("bolo",()=>{
    console.log("you clicked on bolo");
})

event.emit("bolo");

