const express = require("express");
const pool = require("./config/database")

const app = express();
app.use(express.json())

//renomei as tabelas e o que vem no body

app.get("/teste", (request, response) => {
    pool.execute("select * from TB_USUARIOS", (result, err, fields) => {
        if(err) return response.send(err);

        response.send(result);
    })
})

app.post("/teste", (request, response) => {
    pool.execute("insert into TB_USUARIOS(nome, sobrenome) values (?, ?)",
    [request.body.name, request.body.sobrenome],
    (result, err, fields) => {
        if(err) return response.send(err)
        return response.send("Usuario criado!");
    })
})

app.listen(3333, () => {
    console.log("Servidor online")
})