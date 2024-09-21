export default function getRandomNumber(min: number, max: number): number {
    if (min > max) {
      [min, max] = [max, min];
    }
    
    if (isNaN(min) || isNaN(max) || !isFinite(min) || !isFinite(max)) {
      throw new Error('min and max must be valid finite numbers');
    }
  
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  