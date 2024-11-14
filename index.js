let nomeHeroi = "Miguel";    //prompt("Qual o nome do Herói? : ");
let xpHeroi =  40000;        //prompt("Qual o XP do heró? : ");
let nivel = null;


function mostraNivel(nome,xpHeroi){
    if(xpHeroi < 1000){
        nivel="Ferro";
    }
    else if(xpHeroi <=2000){
        nivel="Bronze";
    }
    else if(xpHeroi <=5000){
        nivel="Prata";
    }
    else if(xpHeroi <=7000){
        nivel="Ouro";
    }
    else if(xpHeroi <=8000){
        nivel="Platina";
    }
    else if(xpHeroi <=9000){
        nivel="Ascendente";
    }
    else if(xpHeroi <=10000){
        nivel="Imortal";
    }
    else{
        nivel="Radiante";
    }

    return "O Herói de nome "+nomeHeroi +" está no nível "+ nivel;
}


console.log(mostraNivel(nomeHeroi, xpHeroi));
