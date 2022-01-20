import { Personne } from './models/Personne.js';
import { Compte } from './models/Compte.js';
import { Banque } from './models/Banque.js';

let user = new Personne("Dut", "Gui", "31 aout 1993");
let user2 = new Personne("Dutu", "Gui", "31 aout 1993");
let compte = new Compte("BE25123456789", 400, 200, user);
let compte2 = new Compte("BE25123456782", 400, 200, user2);
let banque = new Banque();

console.log(compte);

window.user = user;
window.user2 = user2;
window.compte = compte;
window.compte2 = compte2;
window.banque = banque;
