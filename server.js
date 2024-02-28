// pages/api/hello_world.js
import pg from "pg";
import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const app=express();
app.use(express.static("public"))
app.listen(3000,()=>{
    console.log("server running at port 3000");
})

const conn = new pg.Client({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/contact",async (req,res)=>{
    const rows= await conn.query("select * from responses");
    console.log(rows);
    res.redirect(__dirname+"/index.html")
})



