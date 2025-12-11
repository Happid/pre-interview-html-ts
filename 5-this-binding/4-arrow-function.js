setTimeout(() => {
    console.log('');
    console.log('4. this di arrow function dan function biasa ...');

    const obj = {
        myKey: "Test",
        normalFn: function () {
            console.log("Normal function =>", this.myKey);
        },
        arrowFn: () => {
            console.log("Arrow function =>", this.myKey);
        }
    };

    obj.normalFn(); // Test
    obj.arrowFn(); // undefined
}, 500)