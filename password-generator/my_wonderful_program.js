#!/usr/bin/env node
import c from 'ansi-colors';
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import clipboard from 'clipboardy';

const argv = yargs(hideBin(process.argv)).argv

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function generatePassword(length=8) {
    let maxI = length;
    let result = '';
    let numbers = '0123456789';
    let symboles = '!,@ù%$?=+-'
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    let numbersLength = numbers.length;
    let symbolesLength = symboles.length;
    let aleatoire1 = entierAleatoire(0,maxI-1);
    let aleatoire2 = entierAleatoire(0,maxI-1);
    if(aleatoire1 == aleatoire2){
        while (aleatoire1 == aleatoire2) {
            aleatoire2 = entierAleatoire(0,maxI-1);
        }
    }
    for (var i = 0; i < length; i++) {
        if(argv.sn){
            if(i== aleatoire1){
                result += numbers.charAt(Math.floor(Math.random() *
                numbersLength));
            }else if(i== aleatoire2){
                result += symboles.charAt(Math.floor(Math.random() *
                symbolesLength)); 
            }else{
                result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
            }
        }else{
            result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
        }
        
    }
    return result;
}
let pass = generatePassword(argv.longueur);
let arrayNumbers = ["0","1","2","3","4","5","6","7","8","9"];
let arraySymboles = ["!",",","@","ù","%","$","?","=","+","-"]
if(argv.copy){
    clipboard.writeSync(pass)
    logColor(pass)
}else{
    logColor(pass)
}

function logColor(pass){
    for (let index = 0; index < pass.length; index++) {
        if(arrayNumbers.includes(pass[index])){
            process.stdout.write(c.red(pass[index])); 
        }else if(arraySymboles.includes(pass[index])){
            process.stdout.write(c.blue(pass[index]));
        }else{
            process.stdout.write((pass[index]));
        }
         
    };
    process.stdout.write("\n")
}
