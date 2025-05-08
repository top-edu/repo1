// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/counter`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    }
  );
  const result: { data: number } = await response.json();

  return result;
};
