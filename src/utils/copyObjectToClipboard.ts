export default async function copyObjectToClipboard(obj: any): Promise<void> {
    try {
      const jsonString = JSON.stringify(obj);
      await navigator.clipboard.writeText(jsonString);
      console.log('Object copied as JSON');
    } catch (err) {
      console.error('Failed to copy object: ', err);
    }
  }
  