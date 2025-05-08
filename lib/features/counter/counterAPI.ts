import { getBaseUrl } from "@/lib/tools/getBaseUrl";

// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
  const baseUrl = getBaseUrl(); // e.g. http://localhost:3000 or https://yourdomain.com
  const response = await fetch(`${baseUrl}/api/counter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  const result: { data: number } = await response.json();

  return result;
};
