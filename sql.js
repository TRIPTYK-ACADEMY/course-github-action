import postgres from 'postgres'

const sql = postgres({
    password: "postgres",
    host: "localhost",
    
 });

 await sql`SELECT 1;`;

export default sql