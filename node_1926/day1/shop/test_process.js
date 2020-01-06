


console.log(process.argv)

console.log(process.argv instanceof Array)

console.log(process.argv.constructor)

let n = 0
setInterval(function() {
    n++;
    console.log(new Date())

    if (n >= 5) {
        process.exit(0);
    }
}, 1000);