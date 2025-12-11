console.log("INI EXAMPLE KE-5");
const Module = (function() {
    let score = 0;

    return {
        increment() {
            score++;
        },
        getScore() {
            return score;
        }
    };
})();

Module.increment();
console.log(Module.getScore());
console.log("");
