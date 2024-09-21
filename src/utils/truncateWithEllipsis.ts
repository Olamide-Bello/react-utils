export default function truncateWithEllipsis(str: string, limit: number): string {
    if (str.length <= limit) {
      return str;
    }
    return str.substring(0, limit).trim() + "...";
  }
