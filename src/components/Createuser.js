class Color {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return `de la couleur ${this.name}`;
    }
}

class Place {
    constructor(seance, colorName) {
        this.id = new Date().getTime();
        this.seance = seance;
        this.color = new Color(colorName);
    }

    toString() {
        return `La place ${this.id} de la séance ${this.seance} et ${this.color}`;
    }
}

class Seance {
    constructor(film, horaire, salle) {
        this.film = film;
        this.horaire = horaire;
        this.salle = salle;
    }
    toString() {
        return `Séance : ${this.film} présentée à ${this.horaire} dans la salle ${this.salle}`;
    }
}

class Film {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `Film ${this.name}`;
    }
}

class Salle {
    constructor(name, position, places) {
        this.name = name;
        this.position = position;
        this.places = places;
    }

    toString() {
        return `La salle ${this.name} se trouve à ${this.position}`;
    }
}

function main() {
    const film = new Film("X Man");
    const salle = new Salle("Atlas", "1er étage à gauche");
    const seance = new Seance(film, "18h00", salle);
    const place1 = new Place(seance, "Rouge");
    const place2 = new Place(seance, "Rouge");
    const place3 = new Place(seance, "Noir");
    places = [place1, place2, place3];
}

main();