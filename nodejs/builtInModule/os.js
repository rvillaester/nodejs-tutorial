import os from 'os';

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`total: ${totalMemory}, free: ${freeMemory}`);