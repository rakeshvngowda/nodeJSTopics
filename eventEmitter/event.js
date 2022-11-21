import fs from 'fs';
import EventEmitter from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on("createFile",()=>{
    console.log("creating student file");
    eventEmitter.emit("finally")
})

eventEmitter.on("finally",()=>{
    console.log("inside another event");
})

function readFile() {
    let data = fs.readFileSync('ACT_test_reporting.csv','utf-8')
    console.log(data);
    eventEmitter.emit("createFile")
}

readFile()
