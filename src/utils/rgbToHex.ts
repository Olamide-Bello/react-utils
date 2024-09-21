export default function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (x: number) => {
      const hex = Math.max(0, Math.min(255, x)).toString(16);
      return hex.padStart(2, '0');
    };
    
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }