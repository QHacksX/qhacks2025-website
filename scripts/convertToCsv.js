
const fs = require("fs");
const { format } = require("fast-csv");
var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function exportCollectionToCSV(collectionName, outputPath) {
  const collectionRef = db.collection(collectionName);
  const snapshot = await collectionRef.get();

  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }

  const rows = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    rows.push({ id: doc.id, ...data });
  });

  const csvStream = format({ headers: true });
  const writableStream = fs.createWriteStream(outputPath);

  writableStream.on("finish", () => {
    console.log("Done writing.");
  });

  csvStream.pipe(writableStream);
  rows.forEach((row) => csvStream.write(row));
  csvStream.end();
}

const collectionName = "users";
const outputPath = `../users/${new Date().toDateString()}-users.csv`;

exportCollectionToCSV(collectionName, outputPath).catch(console.error);
