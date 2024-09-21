export default function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
      hex = hex.split('').map(x => x + x).join('');
    }

    if (hex.length !== 6 || !/^[0-9a-fA-F]{6}$/.test(hex)) {
      return null;
    }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
  
    return { r, g, b };
  }
  