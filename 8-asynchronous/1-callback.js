console.log("1. Callback ...");
function getData(myCallback) {
    console.log("Mengambil data...");
    setTimeout(() => {
        myCallback("Data sudah diterima!");
    });
}

getData((result) => {
    console.log(result);
});
