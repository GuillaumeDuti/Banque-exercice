import { Courant } from './Courant.js';
import { Personne } from './Personne.js';

export class Banque {
    nom = "Newnew banquebanque";
    #comptes;
    constructor() {
        this.#comptes= new Map();
    }

    avoirDesComptes(titulaire) {
        if(titulaire.constructor !== Personne.prototype.constructor) throw new TypeError('titulaire is not a Personne type');
        let sommeDesAvoirs = 0;
        // for(const [key, compte] of this.#comptes) {
        //     if(compte.Titulaire === titulaire && compte.Solde > 0) sommeDesAvoirs += compte.Solde;
        //     else return "no account";
        // }
        for(const compte of this.#comptes.values()) {
            if(compte.Titulaire === titulaire && compte.Solde > 0) sommeDesAvoirs += compte.Solde;
        }
        return sommeDesAvoirs;
    }

    ajouterCompte(newCompte) {
        if(newCompte.constructor !== Courant.prototype.constructor) throw new TypeError('newCompte is not a Compte type')
        if(this.#comptes.has(newCompte.numero)) throw new RangeError('account already setup')
        this.#comptes.set(newCompte.numero, newCompte);
    }
    
    compte(numero) {
        if(!this.#comptes.has(numero)) throw new RangeError('no such account')
        return this.#comptes.get(numero)
    }

}