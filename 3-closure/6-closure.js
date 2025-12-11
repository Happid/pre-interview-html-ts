console.log("INI EXAMPLE KE-6");

// var tidak memiliki block scope,
// semua closure mengakses variabel i yang sama, yang nilainya terakhir adalah 4
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 500);// Output 4 sebanyak 3kali
}

// SOLUSI
// for (var i = 1; i <= 3; i++) {
//     (function(i) {
//         setTimeout(() => console.log(i), 500); // Output 1, 2, 3, 4
//     })(i);
// }
