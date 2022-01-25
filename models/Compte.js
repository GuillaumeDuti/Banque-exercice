import { Personne } from "./Personne.js";

export class Compte {

    #solde;
    #titulaire;
    #events;
    constructor(numero, solde = 0, titulaire) {
        if (isNaN(solde)) throw new TypeError(`La valeur : ${solde} n'est pas un nombre`);
        
        this.numero             = numero;
        this.#solde             = solde;
        this.Titulaire          = titulaire;
        this.#events            = new Map();
    }
    
    depot(value) {
        if (value <= 0) throw new RangeError("La somme doit être positive et supérieur à 0. Réessayer");

        this.#solde = this.Solde+value;
        console.log(`Votre nouveau solde s'éleve désormais à ${this.Solde} €`);
    }
    
    retrait(value, limite = 0) {
        if(isNaN(value)) throw new TypeError(`${value} n'est pas un nombre`)
        if (value <= 0) throw new RangeError("La somme doit être positive et supérieur à 0. Réessayer");
        if (this.Solde + limite < value) throw new Error("La somme demandée dépasse la limite autorisée. Réessayer");
        // this.#solde = this.Solde-value;
        this.#setSolde(this.Solde-value)
        // if(this.#solde < 0) this.#emit("alertNegatif", this);
        console.log(`Votre nouveau solde s'éleve désormais à ${this.Solde} €`);
    }
    
    get Solde() {
        return this.#solde;
    }

    #setSolde(value) {
        if (isNaN(value)) throw new TypeError(`La valeur : ${value} n'est pas un nombre`);
        if (value > this.Solde + this.LigneDeCredit ) throw new Error("Limite de la ligne de crédit dépassée! Réessayer");
            this.#solde = value;
        if(this.Solde < 0) this.#emit("alertNegatif", this);

    }
    
    get Titulaire() {
        return this.#titulaire;
    }

    set Titulaire(value) {
        if (value.constructor !== Personne.prototype.constructor) throw new Error("Données de titulaire invalides");
        this.#titulaire = value;
    }

    on(eventName, func) {
        if(!this.#events.has(eventName)) this.#events.set(eventName, []);
        this.#events.get(eventName).push(func);
    }

    subon(eventName, func) {
        if(!this.#events.has(eventName)) throw new Error(`this function does'nt exist`);
        let index = this.#events.get(eventName).indexOf(func);
        this.#events.get(eventName).splice(index, 1);
    }

    #emit(eventName, data) {
        if(!this.#events.has(eventName)) throw new Error(`this function does'nt exist`);
        this.#events.get(eventName).forEach(
            func => func(data)
        );
    }

}
