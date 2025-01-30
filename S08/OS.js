const os = require("os");

let cpuArchitecture = os.arch();
console.log(cpuArchitecture);
console.log("----------------------------------------");

let platform = os.platform();
console.log(platform);

console.log("----------------------------------------");

let type = os.type();
console.log(type);

console.log("----------------------------------------");

let release = os.release();
console.log(release);

let hostname = os.hostname();
console.log(hostname);

let memoryInBytes = os.totalmem();
console.log(memoryInBytes);

let freemem = os.freemem();
console.log(freemem);
