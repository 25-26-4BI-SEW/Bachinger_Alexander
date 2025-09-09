'use strict';

// User Story 1
function convert(amount) {
    if (amount === undefined) {
        console.error("Amount is not defined!");
        return new Map();
    }
    if (typeof amount !== "number") {
        console.error("Wrong type of amount: " + typeof amount);
        return new Map();
    }
    if (isNaN(amount)) {
        console.error("Amount cannot be NaN!");
        return new Map();
    }
    if (amount < 0) {
        console.error("Amount needs to be higher than 0");
        return new Map();
    }

    let output_map = new Map([[100, 0], [50, 0], [20, 0], [5, 0], [2, 0], [1, 0]])
    for (const coinsKey of output_map.keys()) {
        let count = Math.floor(amount / coinsKey);
        if (count > 0) {
            output_map.set(coinsKey, count);
            amount -= coinsKey * count;
        }
    }
    output_map.forEach((v, k) => {
        if (v === 0) output_map.delete(k);
    })
    return output_map;

}

function rot13(str) {
    if (!str) {
        console.error("Please enter a value!")
        return;
    }
    str = str.toString();
    let output = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charAt(i).charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) charCode = (charCode + 13 - 65) % 26 + 65; else if (charCode >= 97 && charCode <= 122) charCode = (charCode + 13 - 97) % 26 + 97;
        output += String.fromCharCode(charCode);
    }
    return output;
}

function userStory3(strArray, orderBool = true) {
    if (!strArray instanceof Array) throw new TypeError("String Array isn't an Array: " + typeof strArray);
    if (orderBool) return strArray.sort((a, b) => a.localeCompare(b));
    return strArray.sort((a, b) => a.localeCompare(b)).reverse();
}

function userStory4(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i];
        if (typeof n === "number") if (n % 2 === 0) output.push(n);
    }
    return output;
}

function userStories() {
    // User Story 1
    // console.log(convert());
    // console.log(convert(200));
    // console.log(convert(100));
    // console.log(convert(250));
    // console.log(convert(201));
    // console.log(convert(999));
    // console.log(convert(12));
    // console.log(convert(3));
    // console.log(convert(1));
    // console.log(convert(991));
    // console.log(convert(2));
    // console.log("1")
    // console.log(convert("1"));
    // console.log("-1")
    // console.log(convert(-1));
    // console.log("0")
    // console.log(convert(0));
    // console.log("true")
    // console.log(convert(true));
    // console.log("NaN")
    // console.log(convert(NaN));

    // User Story 2
    // console.log(rot13("Hallo"))
    // console.log(rot13(rot13("Hallo")))
    // console.log(rot13("Hallo?10"))
    // console.log(rot13(10))
    // console.log(rot13(null))
    // console.log(rot13(undefined))

    // User Story 3
    // console.log(userStory3(['Banana', 'apple', 'Cherry']));
    // console.log(userStory3(['Banana', 'apple', 'Cherry'], false));
    // console.log(userStory3(['äpfel', 'Apfel', 'banane', 'Öl', "ol", "KI", "LOL", "lol", "zzz"]));
    // console.log(userStory3([]));
    // console.log(userStory3(['apple', 'apple', 'banana', 'banana']));
    // console.log(userStory3(['10', '2', '1', '20']));
    // console.log(userStory3(['zebra', '!', '#', 'apple']));

    // User Story 4
    console.log(userStory4([1, 2, 3, 4, 5, 6, "h", null, undefined]))
}

userStories();