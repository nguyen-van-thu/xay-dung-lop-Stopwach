import {Stopwatch} from "./stopwatch";

let stopwatch: Stopwatch = new Stopwatch();
stopwatch.start();
let sum = 0;
for (let i = 0; i < 100000; i++) {
    sum += i;
}
stopwatch.stop();
console.log(stopwatch.getElapsedTime());