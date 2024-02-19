//Written by:  TAYYABA RAO 
//Date : 18/feb/2024
//Roll no : 00388416

const magicians:string[] = ["Nimra","Irsa","Khadija","Hafsa"];

function make_great(magicians: string[]): void {
    for (let i=0; i < magicians.length; i++){
        magicians[i] = "the Great" + magicians[i];
    }
}

function show_magicians(magicians: string[]): void{
    for (const magician of magicians){
        console.log(magician);
    }
}

make_great(magicians);
show_magicians(magicians);