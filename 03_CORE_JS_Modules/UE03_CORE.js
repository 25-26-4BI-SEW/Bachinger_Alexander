import {rgbToHex, rgbFunctionToHex, hexToRgb} from "./UE03_US01.mjs";
import convert, {accent_color, primary_color, secondary_color} from "./UE03_US02.mjs";

// Test Cases von Felix Radbauer
// 1.1
console.log("\nUser Story 1.1:\n");
console.log(rgbToHex(12, 160, 52));
console.log(rgbToHex(-1, 12, 200));
console.log(rgbToHex(32, 200, 150));

// 1.2
console.log("\nUser Story 1.2:\n");
console.log(rgbFunctionToHex("ff"));
console.log(rgbFunctionToHex(12));
console.log(rgbFunctionToHex("rgb(122,22,65%)"));
console.log(rgbFunctionToHex("rgb(187,22%,88)"));


// 1.3
console.log("\nUser Story 1.3:\n");
console.log(hexToRgb("#fa3", false));
console.log(hexToRgb("#fa3", true));


// 2
console.log("\nUser Story 2:\n");
console.log(convert("#C4A"));
console.log(convert("#C4A", true));
console.log(convert("#f11"));
console.log(convert("rgb(12%,7%,0%)"));
console.log(convert("rgb(50,50,50)"));
console.log(convert("rgb(12,42,140)"));
console.log(convert("rgb(50%,50%,50%)"));
console.log(convert("Hello"));
console.log(convert(123));


// 3
console.log("\nUser Story 3:\n")
const colors = [primary_color, secondary_color, accent_color];
console.log(colors);
let convertedColors = [];
colors.forEach(color => {
    convertedColors.push(convert(color));
});
console.log(convertedColors)