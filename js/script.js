// script for a sort of dinamic partecipant counter 
const partecipants = document.getElementsByClassName("person");
const personCounter = document.getElementsByClassName("person-counter");
personCounter[0].setAttribute("data-value", partecipants.length);

