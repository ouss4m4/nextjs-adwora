import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const db = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "61990",
    database: "adwora",
  });

  try {
    const [rows] = await db.execute("SELECT id, name FROM client");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Failed to fetch clients" });
  } finally {
    db.end();
  }
}
