export default function hslToHex(hsl: string): string {
  const match = hsl.match(/hsl\(([-]?\d+),\s*([-]?\d+)%?,\s*([-]?\d+)%?\)/i);
  if (!match) {
    throw new Error('Invalid HSL format. Expected format: hsl(hue, saturation%, lightness%)');
  }

  const h = parseInt(match[1], 10);
  const s = parseInt(match[2], 10);
  const l = parseInt(match[3], 10);

  // Validate the ranges for h, s, and l after parsing
  if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
    throw new Error('HSL values out of range');
  }

  const normalizedH = h / 360;
  const normalizedS = s / 100;
  const normalizedL = l / 100;

  let r, g, b;

  if (normalizedS === 0) {
    r = g = b = normalizedL; // Achromatic case (gray)
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = normalizedL < 0.5 ? normalizedL * (1 + normalizedS) : normalizedL + normalizedS - normalizedL * normalizedS;
    const p = 2 * normalizedL - q;
    r = hue2rgb(p, q, normalizedH + 1 / 3);
    g = hue2rgb(p, q, normalizedH);
    b = hue2rgb(p, q, normalizedH - 1 / 3);
  }

  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

