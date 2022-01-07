const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo ={
    "host":"localhost",
    "user":"root",
    "password":"cdac",
    "database":"wpt",
};

async function connectioncheck(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connction success");
    await connection. endAsync();
};
//connectioncheck();
async function adduser(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql =`insert into message values(?,?,?)`
    await connection.queryAsync(sql,[message.id,message.name,message.password]);
    console.log("Data Submitted");
    await connection. endAsync();
};
let message ={
    id:"100",
    name:"Rohan",
    password:"1234",
};
//adduser(message);
async function showvalues(){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `select * from message`;
    let list = await connection.queryAsync(sql,[]);
    console.log(list);
    await connection.endAsync();

    
}
showvalues();