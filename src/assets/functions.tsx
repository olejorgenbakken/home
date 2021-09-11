export const contrast = (color: any) => {
    if (color !== undefined) {
        let r, g, b, hsp;
        color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;

        hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );

        if (hsp > 170.5) {
            color = '#111111';
            return color;
        } else {
            color = '#ffffff';
            return color;
        }
    }
}