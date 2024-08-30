function testeVar(){
    if (true){
        var x = 10
        console.log('Valor de X dentro do bloco:' + x)

    }
   
    console.log ('Valor do X fora do bloco:' + x)
}


function testeLet(){
    if (true){
        let Y = 10
        console.log('Valor de Y dentro do bloco:' + Y)

    }
   
   // console.log ('Valor do Y fora do bloco:' + Y)
}

testeVar()
testeLet()

