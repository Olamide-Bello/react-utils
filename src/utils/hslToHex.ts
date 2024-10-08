export default function hslToHex(hsl: string): string {
    const match = hsl.match(/hsl\((\d+), (\d+)%, (\d+)%\)/);
    if (!match) {
      throw new Error('Invalid HSL format');
    }
  
    const h = parseInt(match[1]) / 360;
    const s = parseInt(match[2]) / 100;
    const l = parseInt(match[3]) / 100;
  
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  