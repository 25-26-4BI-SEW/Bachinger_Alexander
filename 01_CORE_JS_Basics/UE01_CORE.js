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

    let output_map = new Map([[200, 0], [100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0], [1, 0]]); //€
    for (const coinsKey of output_map.keys()) {
        let count = Math.floor(amount / coinsKey);
        if (count > 0) {
            output_map.set(coinsKey, count);
            amount -= coinsKey * count;
        }
    }
    output_map.forEach((v, k) => {
        if (v === 0) output_map.delete(k);
    });
    return output_map;

}

// User Story 2
function rot13(str) {
    if (!str) {
        console.error("Please enter a value!");
        return;
    }
    str = str.toString();
    let output = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charAt(i).charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) charCode = (charCode + 13 - 65) % 26 + 65;
        else if (charCode >= 97 && charCode <= 122) charCode = (charCode + 13 - 97) % 26 + 97;
        output += String.fromCharCode(charCode);
    }
    return output;
}

// User Story 3
function userStory3(strArray, orderBool = true) {
    if (!(strArray instanceof Array)) throw new TypeError("Array isn't an Array: " + typeof strArray);
    if (orderBool) return strArray.sort((a, b) => a.localeCompare(b));
    return strArray.sort((a, b) => a.localeCompare(b)).reverse();
}

// User Story 4
function userStory4(arr) {
    if (!Array.isArray(arr) || arr === null || !arr) return [];
    return arr.filter(x => typeof x === "number" && x % 2 === 0);
}

// User Story 5
function test(fu, arg, exp) {
    if (!(fu instanceof Function) || arg instanceof Function || exp instanceof Function || !fu || !arg || !exp) {
        console.error("Invalid input: " + fu + ", " + arg + ", " + exp);
        return false;
    }
    let result = fu(arg);
    if (typeof result !== typeof exp) return false;
    return result === exp;
}

// User Story 6
function generate(op) {
    return function (a, b) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                console.error('Unsupported operation: ' + op);
        }
    };
}

// User Story 7
function userStory7(str) {
    if (!str || typeof str !== "string") {
        console.error("Input needs to be a String: " + typeof str);
        return "";
    }
    return str.match(/\d{2}\.\d{2}\.\d{4}/g) || [];
}

function CORE1_userStories() {
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
    // console.log(convert("1"));
    // console.log(convert("-1"));
    // console.log(convert(-1));
    // console.log(convert("0"));
    // console.log(convert(0));
    // console.log(convert("true"));
    // console.log(convert(true));
    // console.log(convert(false));
    // console.log(convert("NaN"));
    // console.log(convert(NaN));

    // User Story 2
    // console.log(rot13("Hallo"));
    // console.log(rot13(rot13("Hallo")));
    // console.log(rot13("Hallo?10"));
    // console.log(rot13(10));
    // console.log(rot13(null));
    // console.log(rot13(undefined));

    // User Story 3
    // function startUS3(arr, bool) {
    //     try {
    //         return userStory3(arr, bool);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    //
    // console.log(startUS3(['Banana', 'apple', 'Cherry']));
    // console.log(startUS3(['Banana', 'apple', 'Cherry'], false));
    // console.log(startUS3(['äpfel', 'Apfel', 'banane', 'Öl', "ol", "KI", "LOL", "lol", "zzz"]));
    // console.log(startUS3([]));
    // console.log(startUS3("h"));
    // console.log(startUS3());
    // console.log(startUS3(['apple', 'apple', 'banana', 'banana']));
    // console.log(startUS3(['10', '2', '1', '20']));
    // console.log(startUS3(['zebra', '!', '#', 'apple']));

    // User Story 4
    // console.log(userStory4([1, 2, 3, 4, 5, 6, "h", null, undefined, [1, 2, 3, 4]]));
    // console.log(userStory4());
    // console.log(userStory4(null));
    // console.log(userStory4(undefined));
    // console.log(userStory4(2));
    // console.log(userStory4([2]));
    // console.log(userStory4("1"));

    // User Story 5
    // console.log(test(userStory4, [1, 2, 3, 4, 5, 6, "h", null, undefined, [1, 2, 3, 4]], [2, 4, 6]));
    // console.log(test(userStory4, [1, 2, 3, 4, 5, 6, "h", null, undefined, [1, 2, 3, 4]], [2, 4]));
    // console.log(test(userStory4, userStory4, [2, 4, 6]));
    // console.log(test(userStory4, [2, 3], userStory4));
    // console.log(test(userStory3, ['Banana', 'apple', 'Cherry'], ['apple', 'Banana', 'Cherry']));
    // console.log(test(rot13, "Hallo", "Unyyb"));
    // console.log(test(userStory3, (['Banana', 'apple', 'Cherry'], false), ['Cherry', 'Banana', 'apple']));

    // User Story 6
    // console.log(generate('+')(1, 1)); // 2
    // console.log(generate('-')(5, 3)); // 2
    // console.log(generate('*')(3, 4)); // 12
    // console.log(generate('/')(8, 2)); // 4
    // console.log(generate('/')(5, 0)); // Infinity
    // console.log(generate('/')(0, 0)); // NaN
    // try {
    //     console.log(generate('%')(5, 2));
    // } catch (e) {
    //     console.log(e.message);
    // }
    // console.log(generate('+')('a', 3)); // a3
    // console.log(generate('*')(2, 'b')); // NaN
    // console.log(generate('+')(null, 5)); // 5 (null wird zu 0);
    // console.log(generate('+')(undefined, 5)); // NaN
    // console.log(generate('+')(0.1, 0.2)); // 0.30000000000000004
    // console.log(generate('+')(0.1 + 0.2, 0.3)); // 0.6000000000000001
    // console.log(generate('*')(Number.MAX_SAFE_INTEGER, 2)); // Rundungsproblem möglich
    // console.log(generate('-')(-5, -3)); // -2
    // console.log(generate('*')(-2, 4));  // -8
    // console.log(generate('/')(-8, 2));  // -4
    // console.log(generate('+')(null, undefined)); // NaN
    // console.log(generate('*')(Infinity, 0)); // NaN
    // console.log(generate('-')('foo', 'bar')); // NaN
    // console.log(generate('+')(0, -0)); // 0
    // console.log(generate('/')(0, -0)); // -Infinity
    // console.log(generate('*')(1e308, 1e10)); // Infinity
    // console.log(generate('/')(1e-308, 1e308)); // 0

    // User Story 7
    // console.log(userStory7("We have meetings on 12.09,2025\n\t and 05.10.2025, but not on 32.13.25."));
}

CORE1_userStories();