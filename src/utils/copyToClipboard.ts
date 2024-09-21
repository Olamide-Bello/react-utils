export default async function copyToClipboard(data: string | { text?: string; html?: string }): Promise<void> {
    try {
      if (typeof data === 'string') {
        await navigator.clipboard.writeText(data);
      } else {
        const clipboardItems: ClipboardItem[] = [];

        if (data.text) {
          clipboardItems.push(new ClipboardItem({
            'text/plain': new Blob([data.text], { type: 'text/plain' })
          }));
        }

        if (data.html) {
          clipboardItems.push(new ClipboardItem({
            'text/html': new Blob([data.html], { type: 'text/html' })
          }));
        }
  
        await navigator.clipboard.write(clipboardItems);
      }
      console.log('Copied successfully');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  