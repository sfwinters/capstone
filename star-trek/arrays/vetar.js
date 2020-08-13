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

const evek = new Officer ('Evek', 'Gul', 'Commander', 'Cardassian');
const telak = new Officer ('Telak', 'Glinn', 'Executive Officer', 'Cardassian')