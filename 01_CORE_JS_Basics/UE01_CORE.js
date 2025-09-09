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
        while (amount - coinsKey >= 0) {
            amount -= coinsKey;
            output_map.set(coinsKey, output_map.get(coinsKey) + 1);
        }
    }
    output_map.forEach((v, k) => {
        if (v === 0) output_map.delete(k);
    })
    return output_map;

}

function rot13(str) {
    str = str.toString();
    // console.log(typeof str);
    let output = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charAt(i).charCodeAt(0)
        console.log(str.charAt(i) + ":" + charCode)
        if (charCode >= 65 && charCode <= 90) {
            // console.log(charCode)
            charCode = charCode += 13
            console.log(str.charAt(i) + ":" + charCode)
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = charCode += 13
            console.log(str.charAt(i) + ":" + charCode)
        }
        output += String.fromCharCode(charCode);
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
    console.log(rot13("Hallo"))

}


userStories();