export class Personne {
    constructor(nom, prenom, dateDeNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateDeNaissance = dateDeNaissance;
    }

    getNom() {
        console.log(`nom = ${this.nom}`);
    }
    setNom(nom) {
        this.nom = nom;
    }

    getPrenom() {
        console.log(`prenom = ${this.prenom}`);
    }
    setPrenom(prenom) {
        this.prenom = prenom;
    }

    getDateDeNaissance() {
        console.log(`date de naissance = ${this.dateDeNaissance}`);
    }
    setDateDeNaissance(dateDeNaissance) {
        this.dateDeNaissance = dateDeNaissance;
    }
}