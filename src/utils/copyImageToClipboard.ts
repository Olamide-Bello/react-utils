export default async function copyImageToClipboard(imageUrl: string): Promise<void> {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
  
      const clipboardItem = new ClipboardItem({
        [blob.type]: blob,
      });
  
      await navigator.clipboard.write([clipboardItem]);
    } catch (err) {
      console.error('Failed to copy image: ', err);
    }
  }