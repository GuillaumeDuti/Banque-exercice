import { Personne } from './models/Personne.js';
import { Compte } from './models/Compte.js';

let user = new Personne("Dut", "Gui", "31 aout 1993");
let compte = new Compte(23, 400, 200, user);

console.log(compte);

window.user = user;
window.compte = compte;
