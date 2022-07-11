import postgres from 'postgres'

const sql = postgres({
    password: "postgres",
    database: "postgres",
    user: "postgres"
 });

 await sql`SELECT 1;`;

export default sql