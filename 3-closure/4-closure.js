// Memoization (closure untuk caching)
console.log("INI EXAMPLE KE-4");
function createCache() {
    const cache = {}; // <-- tertutup oleh closure

    return function (x) {
        if (cache[x]) {
            console.log("cache:", cache);
            return cache[x];
        }

        console.log("nilai baru:", x);
        const result = x * 2;
        cache[x] = result; // simpan hasil ke cache
        return result;
    };
}

const doubleTest = createCache();
doubleTest(5); // nilai baru: 5
doubleTest(5); // dari cache jadi: 10
doubleTest(7); // nilai baru: 7
console.log("");
