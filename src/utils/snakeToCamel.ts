export default function snakeToCamel(snakeCase: string): string {
    return snakeCase
      .toLowerCase()
      .replace(/(_\w)/g, match => match[1].toUpperCase());
  }