import { Personne } from './models/Personne.js';
import { Courant } from './models/Courant.js';
import { Banque } from './models/Banque.js';
import { Epargne } from './models/Epargne.js';

let user = new Personne("Dut", "Gui", "31 aout 1993");
let user2 = new Personne("Dutu", "Gui", "31 aout 1993");
let courant = new Courant("BE1", 400, 200, user);
let courant2 = new Courant("BE3", 400, 200, user2);
let epargne = new Epargne("BE2", 400, user);
let banque = new Banque();

console.log(courant);

window.user = user;
window.user2 = user2;
window.epargne = epargne;
window.courant = courant;
window.courant2 = courant2;
window.banque = banque;
