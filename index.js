function giveExcuse() {

    let who = ['the dog', 'my granma', 'his turtle', 'my bird', 'her sister', 'the rooster'];
    let what = ['eat', 'pissed', 'crushed', 'broked', 'dreamed', 'loved', 'fell down'];
    let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying', 'when I was into prision', 'when I was in the gym'];

    let randomWho = Math.floor(Math.random()*who.length);
    let randomWhat = Math.floor(Math.random()*what.length);
    let randomWhen = Math.floor(Math.random()*when.length);

    document.querySelector("#excuse").innerHTML = who[randomWho] + " " + what[randomWhat] + " " + when[randomWhen];

};