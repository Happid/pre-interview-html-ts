// Private Variable
console.log("INI EXAMPLE KE-2");

const user = () => {
    let name = "Happid";

    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
        }
    };
}

const u = user();
console.log(u.getName()); // Happid
u.setName("Ilmi");
console.log(u.getName()); // Ilmi
console.log("");
