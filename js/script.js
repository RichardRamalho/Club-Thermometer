import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculate, notANumber } from "./utils.js";

/* Variables */
const form = document.querySelector("form");
const inputClub = document.querySelector("#club");
const inputBrazilian = document.querySelector("#brazilian");
const inputBrazilCup = document.querySelector("#brazilCup");
const inputLiberators = document.querySelector("#liberators");
const inputClubWorldCup = document.querySelector("#clubWorldCup");

inputClub.oninput = () => AlertError.close();
inputBrazilian.oninput = () => AlertError.close();
inputBrazilCup.oninput = () => AlertError.close();
inputLiberators.oninput = () => AlertError.close();
inputClubWorldCup.oninput = () => AlertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const club = inputClub.value;
  const brazilian = inputBrazilian.value;
  const brazilCup = inputBrazilCup.value;
  const liberators = inputLiberators.value;
  const clubWorldCup = inputClubWorldCup.value;
  
  const inputIsNotANumber = notANumber(brazilian) || notANumber(brazilCup) || notANumber(liberators) || notANumber(clubWorldCup)

  if (inputIsNotANumber) {
    AlertError.open()
    return;
  }
  AlertError.close()

  const result = calculate( brazilian, brazilCup, liberators, clubWorldCup);

  let message 

  if (result > 10) {
     message = `${club} é Gigante!`
  } else if(result < 6) {
     message = `${club} é Pequeno!`
  } else { 
     message = `${club} é Grande!`
  }

  Modal.message.innerText = message;
  Modal.open();
};
