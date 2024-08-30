const express = require ("express")
const app = express ()

app.get("/", function(req,res){
    //req são os dados enviados pelo usuario
    // res são as respostas que vão ser enviadas para o usuário
    res.send ("<h1> Bem vindo ao SENAI de Osasco! <h1> ")
})

app.listen(4000, function (erro){

    if (erro) {
        console.log("ocorreu um erro!")
    }else{
    console.log("Servidor iniciado com sucesso!")
}
})

app.get("/aula", function(req,res){
    res.send("<br><h1>Aula TOP!</h1>")
})

app.get("/aula/professores", function(req,res){
    res.send("<br><h1>Os melhores professores estão aqui!</h1>")
})

//app.set ("View Engine", "ejs")