let counts = {};

// STEP 1: Hitung kemunculan setiap angka (pure loop)
for (let i = 0; i < tempArray.length; i++) {
    let num = tempArray[i];

    if (counts[num] === undefined) {
        counts[num] = 1;
    } else {
        counts[num]++;
    }
}

// STEP 2: Ambil unique1, duplicates1, distinct1 (pure loop)
let unique1 = [];
let duplicates1 = [];
let distinct1 = [];

for (let key in counts) {
    let num = Number(key);

    // distinct1: semua angka tanpa duplikat
    distinct1.push(num);

    // unique1: muncul sekali
    if (counts[key] === 1) {
        unique1.push(num);
    }

    // duplicates1: muncul lebih dari sekali
    if (counts[key] > 1) {
        duplicates1.push(num);
    }
}

// STEP 3: Sorting manual (pure loop bubble sort)
for (let i = 0; i < distinct1.length - 1; i++) {
    for (let j = 0; j < distinct1.length - 1 - i; j++) {
        if (distinct1[j] > distinct1[j + 1]) {
            let temp = distinct1[j];
            distinct1[j] = distinct1[j + 1];
            distinct1[j + 1] = temp;
        }
    }
}

console.log("THIS RESULTS USING PURE LOOPING");
console.log("Output unique1 Value =>", unique1);      // [1, 3, 5, 7, 8]
console.log("Output Duplicate Value =>", duplicates1); // [2, 4, 6]
console.log("Output distinct1 Value =>", distinct1);     // [1,2,3,4,5,6,7,8]