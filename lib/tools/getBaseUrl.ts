export function getBaseUrl() {
  const baseUrl = process.env.VERCEL_URL // automatically set on Vercel
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  return baseUrl;
}
