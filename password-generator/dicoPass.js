// let requestURL ='https://github.com/dwyl/english-words/blob/master/words_dictionary.json';

// let request = new XMLHttpRequest();

// request.responseType = 'json';
// request.send();

// let reponse = request.getResponse();
// console.log(reponse);

import fetch from 'node-fetch';

let url = "https://raw.githubusercontent.com/dwyl/english-words/49a0d9e8a40f5a0177d7c952ce1537a60c5cf256/words_dictionary.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        //json = JSON.parse(json);
        console.log(json["abbatical"]);
    });