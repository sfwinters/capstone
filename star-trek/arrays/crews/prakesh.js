class Officer {
    constructor(name, rank, position, race) {
        this.name = name;
        this.rank = rank;
        this.position = position;
        this.race = race;
        this.photo = '';
        this.bio = '';
    }
}

const dukat = new Officer ('Dukat', 'Gul', 'Commander', 'Cardassian')