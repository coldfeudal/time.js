var timer = new Timer(); // Start timer
timer.start(); // Restart it if you need

for (let i = 0; i < 100; i++) { // Dummy load
    $('body').prepend('<span></span>')
}

console.log(timer.last()); // Get the time spent