import { Personne } from "./Personne.js";

export class Epargne {

    #solde;
    #titulaire;

    constructor(numero, solde = 0, titulaire) {
        if (isNaN(solde)) throw new TypeError(`La valeur : ${solde} n'est pas un nombre`);
        if (solde > this.Solde + this.LigneDeCredit ) throw new Error("Limite de la ligne de crédit dépassée! Réessayer");
        this.numero             = numero;
        this.#solde             = solde;
        this.Titulaire          = titulaire;
        this.dernierTransfert   = undefined;
    }
    
    depot(value) {
        if (value <= 0) throw new RangeError("La somme doit être positive et supérieur à 0. Réessayer");

        this.dernierTransfert = new Date();
        this.#solde = this.Solde+value;

        console.log(`Votre nouveau solde s'éleve désormais à ${this.Solde} €`);
    }
    
    retrait(value) {
        if (value <= 0) throw new RangeError("La somme doit être positive et supérieur à 0. Réessayer");
        if (this.Solde < value) throw new RangeError("La somme demandée dépasse la limite autorisée. Réessayer");

        this.dernierTransfert = new Date();
        this.#solde = this.Solde-value;

        console.log(`Votre nouveau solde s'éleve désormais à ${this.Solde} €`);
    }
    
    get Solde() {
        return this.#solde;
    }

    get DernierTransfert() {
        return this.dernierTransfert;
    }

    // set Solde(value) {
    //     if (isNaN(value)) throw new TypeError(`La valeur : ${value} n'est pas un nombre`);
    //     if (value > this.Solde + this.LigneDeCredit ) throw new Error("Limite de la ligne de crédit dépassée! Réessayer");
    //         this.#solde = value;
    // }
    
    get Titulaire() {
        return this.#titulaire;
    }

    set Titulaire(value) {
        if (value.constructor !== Personne.prototype.constructor) throw new Error("Données de titulaire invalides");
        this.#titulaire = value;
    }

}
