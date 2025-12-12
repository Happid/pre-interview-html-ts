setTimeout(() => {
    console.log("");
    console.log("2. Promise ...");

    function getData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise Data diterima!");
            });
        });
    }

    getData().then(result => {
        console.log(result);
    });
})
