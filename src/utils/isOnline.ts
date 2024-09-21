export default async function isOnline(testUrl = 'https://example.com', timeout = 5000): Promise<boolean> {
    if (!navigator.onLine) {
      return false;
    }
  
    try {
      const controller = new AbortController();
      const signal = controller.signal;

      const timeoutId = setTimeout(() => controller.abort(), timeout);
  
      const response = await fetch(testUrl, { method: 'HEAD', signal });

      clearTimeout(timeoutId);

      return response.ok;
    } catch (err) {
      return false;
    }
  }
  