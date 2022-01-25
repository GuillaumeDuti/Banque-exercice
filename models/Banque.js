import { Courant } from './Courant.js';
import { Epargne } from './Epargne.js';
import { Personne } from './Personne.js';

export class Banque {
    nom = "Newnew banquebanque";
    #comptes;
    constructor(nom, ...comptes) {
        this.nom = nom;
        this.#comptes= new Map();
        comptes.forEach( c => this.ajouterCompte(c));
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
        if(newCompte.constructor !== Courant.prototype.constructor && newCompte.constructor !== Epargne.prototype.constructor) throw new TypeError('newCompte is not a Compte type')
        if(this.#comptes.has(newCompte.numero)) throw new RangeError('account already setup')
        this.#comptes.set(newCompte.numero, newCompte);
        newCompte.on("alertNegatif", this.onNegatif);
    }

    // retirerCompte(number) {
    //     for(compte of this.#comptes) {
    //         if(compte.numero === number) {
                
    //         }
    //     }
    // }

    calculDesInterets(compte, solde) {
        if(compte.constructor !== Courant.prototype.constructor && compte.constructor !== Epargne.prototype.constructor) throw new TypeError('newCompte is not a Compte type')
        if(compte.constructor === Epargne.prototype.constructor) compte.depot(solde*0.03) 
        if(compte.constructor === Courant.prototype.constructor) {
           if(solde>0) compte.depot(solde*0.015)
           else return compte.retrait(solde*0.04)
        }
    }
    
    compte(numero) {
        if(!this.#comptes.has(numero)) throw new RangeError('no such account')
        return this.#comptes.get(numero)
    }

    onNegatif(compte) {
        alert(`Le compte ${compte.numero} est désormais en négatif : ${compte.Solde}`)
    }

}
