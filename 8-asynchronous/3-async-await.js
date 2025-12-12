setTimeout(() => {
    console.log("");
    console.log("3. Async await ...");

    function getData() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("Async Await Data masuk!"));
        });
    }

    async function run() {
        console.log("Menunggu data...");
        const result = await getData();
        console.log(result);
    }

    run();
}, 300)