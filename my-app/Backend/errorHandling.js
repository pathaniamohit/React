try {
    const result = await collection.insertOne(req.body);
    res.json(result.ops[0]);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: 'Failed to insert document' });
  }
  