import postgres from 'postgres'

const sql = postgres({
    password: "postgres",
    host: "localhost",
    database: "postgres",
    user: "postgres"
 });

 await sql`SELECT 1;`;

export default sql