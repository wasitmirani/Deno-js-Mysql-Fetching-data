import { Client } from "https://deno.land/x/mysql/mod.ts";



const client = await new Client().connect({
hostname: "localhost",
username: "root",
password: "",
});

/*  Create Datbase  in mysql  */
// await client.execute("CREATE DATABASE IF NOT EXISTS chat_db");
await client.execute("USE chat_db");

// Create Table
// await client.execute(`
//    CREATE TABLE IF NOT EXISTS books (
//        id int(11) NOT NULL AUTO_INCREMENT,
//        name varchar(100) NOT NULL,
//        PRIMARY KEY (id)
//    );
// `);


// let result = await client.execute(`INSERT INTO users(name) values(?)`, ["Value"]
// );
// console.log(result);

// const books_all = await client.query(“select * from users”);
// console.log(books_all);

const user = await client.query(
  "select * from users "
 );
 console.log(user);
 
 await client.close();