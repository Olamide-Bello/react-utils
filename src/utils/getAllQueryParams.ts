export default function getAllQueryParams(url: string): Record<string, string | null> {
  const params = new URLSearchParams(new URL(url).search);
  const queryParams: Record<string, string | null> = {};

  params.forEach((value, key) => {
    queryParams[key] = value === '' ? null : value;  // Set empty string to null
  });

  return queryParams;
}