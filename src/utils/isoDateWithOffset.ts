export default function convertToISOStringWithOffset(date: Date | null, hours: number): string | null {
    if (date) {
      const adjustedDate = new Date(date);
      adjustedDate.setHours(adjustedDate.getHours() + hours);
      return adjustedDate.toISOString();
    }
    return null;
  }