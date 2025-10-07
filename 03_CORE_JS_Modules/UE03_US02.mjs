import {rgbFunctionToHex, hexToRgb} from "./UE03_US01.mjs";

function convert(input, asPercentage = false) {
    if (input.length === 0) return -1;
    input = input.toString().trim().toLowerCase();
    if (input.startsWith("#")) {
        input = input.substring(1);
        if (input.length === 3) input = input.split('').map(c => c + c).join('');
        if (input.length !== 6) return -1;
        return hexToRgb(input, asPercentage);
    } else if (input.startsWith("rgb(") && input.endsWith(")")) return rgbFunctionToHex(input);
    return -1;
}

const primary_color = "#3498db";
const secondary_color = "#2ecc71";
const accent_color = "#e74c3c";

export {primary_color, secondary_color, accent_color};
export default convert;