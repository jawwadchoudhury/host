const EDGE_CONFIG_ID = process.env.EDGE_CONFIG_ID

export default async function updateEdgeConfig(key:string, value:string) {
  const updateUrl = `https://api.vercel.com/v1/edge-config/${EDGE_CONFIG_ID}/items`;

  const response = await fetch(updateUrl, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items: [
        {
          operation: 'upsert', // Updates/insert, depends on if it exists
          key: key,
          value: value,
        },
      ],
    }),
  });

  const result = await response.json();
  
  if (result.status !== 'ok') {
    throw new Error('Failed to update edge config...');
  }
}