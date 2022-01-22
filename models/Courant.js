import { Compte } from "./Compte.js";

export class Courant extends Compte {

    #ligneDeCredit;

    constructor(numero, solde = 0, titulaire,  ligneDeCredit = 200) {
        super(numero, solde, titulaire)
        if (solde > this.Solde + this.LigneDeCredit ) throw new Error("Limite de la ligne de crédit dépassée! Réessayer");
        this.LigneDeCredit      = ligneDeCredit;
    }
    
    depot(value) {
        super.depot(value);
    }
    
    retrait(value) {
        super.retrait(value, this.#ligneDeCredit);
    }
    
    get LigneDeCredit() {
        return this.#ligneDeCredit;
    }
    
    set LigneDeCredit(value) {
        if (isNaN(value)) throw new TypeError(`La valeur : ${value} n'est pas un nombre`);
        if (value < 0) throw new Error("Ligne de crédit négative! Réessayer");
        this.#ligneDeCredit = value;
    }
}
