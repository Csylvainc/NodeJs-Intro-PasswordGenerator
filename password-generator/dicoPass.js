import fetch from 'node-fetch';

let url = "https://raw.githubusercontent.com/dwyl/english-words/49a0d9e8a40f5a0177d7c952ce1537a60c5cf256/words_dictionary.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((dico) => {
        const keys = Object.keys(dico);
        console.log(dico);
        let pass="";
        for(let i = 0; i<=3; i++){
            const prop = keys[Math.floor(Math.random() * keys.length)];
            console.log(prop);
            pass +=prop;
        }  
        console.log(pass);
    });

 