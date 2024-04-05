const { MongoClient, ObjectID } = require('mongodb');

const uri = process.env.MONGODB_URI;

async function connectToDatabase() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    return client.db(); // Returns the default database
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Rethrow the error to handle it outside
  }
}

async function createDocument(collectionName, document) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  try {
    const result = await collection.insertOne(document);
    console.log("Document inserted:", result.insertedId);
    return result.insertedId;
  } catch (error) {
    console.error("Error inserting document:", error);
    throw error;
  }
}

async function findDocument(collectionName, query) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  try {
    const result = await collection.findOne(query);
    console.log("Document found:", result);
    return result;
  } catch (error) {
    console.error("Error finding document:", error);
    throw error;
  }
}

async function updateDocument(collectionName, filter, update) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  try {
    const result = await collection.updateOne(filter, { $set: update });
    console.log("Document updated:", result.modifiedCount);
    return result.modifiedCount;
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
}

async function deleteDocument(collectionName, filter) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);

  try {
    const result = await collection.deleteOne(filter);
    console.log("Document deleted:", result.deletedCount);
    return result.deletedCount;
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
}

// Example usage:
(async () => {
  try {
    // Create a document
    const insertedId = await createDocument('users', { name: 'John', age: 30 });

    // Find a document
    const foundDocument = await findDocument('users', { _id: ObjectID(insertedId) });

    // Update a document
    await updateDocument('users', { _id: ObjectID(insertedId) }, { age: 31 });

    // Delete a document
    await deleteDocument('users', { _id: ObjectID(insertedId) });
  } catch (error) {
    console.error("Error:", error);
  }
})();
