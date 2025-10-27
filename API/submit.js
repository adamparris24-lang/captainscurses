export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { field1, field2, field3 } = req.body;

    // Basic validation
    if (![field1, field2, field3].every(f => typeof f === 'string' && f.trim() !== '')) {
      return res.status(400).json({ message: 'All fields must be non-empty strings.' });
    }

    // Log the text (this is what appears in Vercel dashboard logs)
    console.log('Dispersal submission received:');
    console.log(`Field 1: ${field1}`);
    console.log(`Field 2: ${field2}`);
    console.log(`Field 3: ${field3}`);

    // Optionally, you can also store it somewhere (DB, JSON file, etc.) later

    return res.status(200).json({ message: 'Submission received.' });
  } catch (err) {
    console.error('Error processing submission:', err);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}