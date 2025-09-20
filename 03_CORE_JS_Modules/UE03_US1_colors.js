export function rgbToHex(r, g, b) {
    if (![r, g, b].every(v => Number.isInteger(v) && v >= 0 && v <= 255)) return -1;
    const toHex = (n) => {
        const hex = n.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function rgbFunctionToHex(rgb) {
    const values = rgb.replace(/rgb\(|\)/gi, '').split(',').map(v => v.trim()); //g...global, i...case insensitiv
    const [r, g, b] = values.map(v => {
        if (v.includes('%')) return Math.round(parseFloat(v) * 2.55); else {
            return parseInt(v, 10);
        }
    });
    return rgbToHex(r, g, b);

}

export function hexToRgb(hex, isPercentage) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join(''); // #0ca -> #00ccaa
    if (hex.length !== 6) return -1;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    if (isPercentage) {
        const percent = (n) => Math.round((n / 255) * 100) + '%';
        return `rgb(${percent(r)}, ${percent(g)}, ${percent(b)})`;
    } else return `rgb(${r}, ${g}, ${b})`;
}