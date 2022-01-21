import { Compte } from "./Compte.js";


export class Epargne extends Compte {

    constructor(numero, solde = 0, titulaire) {
        super(numero, solde, titulaire);
        this.dernierTransfert   = undefined;
    }
    
    depot(value) {
        super.depot(value)
        this.dernierTransfert = new Date();
    }
    
    retrait(value) {
        if (this.Solde < value) throw new Error("La somme demandée dépasse la limite autorisée. Réessayer");
        super.retrait(value);
        this.dernierTransfert = new Date();
    }

    get DernierTransfert() {
        return this.dernierTransfert;
    }
}
