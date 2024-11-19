let velocidade=0
let status = true

function darPartida(){
    if(status==false){

        status=true

        alert("O carro  esta ligado")

    }

    else{

        alert("ERRO!O carro não pode dar partida")
    }

}
function acelerar(){

   if(velocidade>=0)
{
    velocidade=velocidade+10

    alert(`O carro esta a ${velocidade}Km/h`)

}

else{

    alert("O carro não pode ser acelerado ")
}


}
function diminuirVelocidade(){

    if(velocidade>=10){

        velocidade=velocidade-10

        alert(`A velocidade esta a ${velocidade}Km/h`)
    }

    else{


        alert("O carro não pode diminuir a velocidade")
    }
   
}

function desligarCarro(){

   if(velocidade==0 && status==true){

    status=false

    alert("O carro esta desligado")


   }

   else{

    alert("ERRO!Nao tem como desligar o carro")

   }
}
function estadoAtual(){

    if(velocidade<=20){

        alert("Marcha 1")

    }
   
    else if(velocidade>=21 && velocidade<=30){

        alert("Marcha 2")

    }

    else if(velocidade>=31 && velocidade<=40){
        alert("Marcha 3")

    }

    else if(velocidade>=41 && velocidade<=60){


        alert("Marcha 4")
    }

    else if(velocidade>61){


        alert("Marcha 5")
    }

    alert(`Velocidade atual R${velocidade}`)
}

while(status==true){
let menu= Number(prompt(" 1 para dar partida\n 2 para acelerar \n 3 para diminuir velocidade \n 4 para desligar o carro \n 5 o estado atual " ))



if(menu==1){

    darPartida()

}
else if(menu==2){

    acelerar()

 }

 else if(menu==3){

    diminuirVelocidade()
 }

 else if(menu==4){

    desligarCarro()
 }

 else if(menu==5){

    estadoAtual()
 }

}