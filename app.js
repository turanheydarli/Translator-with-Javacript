const word = document.querySelector("#word");
const textarea = document.querySelector("#translate");
const lang = document.querySelectorAll("select")[0];
const to = document.querySelectorAll("select")[1];


eventListener();

function eventListener(){
    word.addEventListener("keyup", translate);
}

function translate(e){
    let text = word.value;
    translater(text,lang.value,to.value).then(data => textarea.value = data.text);
}

async function translater(text,lang,to){
    let url;

    if(lang == "Select Language"){
        url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210828T132537Z.10d63391e2cf6f63.38ad846867e449423d4c2a57c450d6b25641e412&text=${text}&lang=${to}`;
    }else{
        url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20210828T132537Z.10d63391e2cf6f63.38ad846867e449423d4c2a57c450d6b25641e412&text=${text}&lang=${lang}-${to}`;
    }
    const response = await fetch(url);

    return response.json();
}
