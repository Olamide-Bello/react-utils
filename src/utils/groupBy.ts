export default function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
    return arr.reduce((acc, item) => {
      let groupKey: string;

      if (item[key] === null) {
        groupKey = 'null';
      } else if (item[key] === undefined) {
        groupKey = 'undefined';
      } else {
        groupKey = String(item[key]);
      }

      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }

      acc[groupKey].push(item);
  
      return acc;
    }, {} as Record<string, T[]>);
  }
  