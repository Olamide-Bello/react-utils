export default function getQueryParam(url: string, key: string, defaultValue: string = ''): string {
    const params = new URLSearchParams(new URL(url).search);
    return params.get(key) || defaultValue;
}
  