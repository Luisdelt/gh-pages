import * as Parser from './grammar.js';

export default function parsear(entrada: string){
    try{
        Parser.parse(entrada)
    }catch(e){
        return e as string
    }
    return "Compilación exitosa!"
}

