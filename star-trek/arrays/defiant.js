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

const sisko = new Officer ('Benjamin Lafayette Sisko', 'Captain', 'Commanding Officer', 'Human');
const kira = new Officer ('Kira Nerys', 'Commander', 'First Officer', 'Bajoran');
const jadzia = new Officer ('Jadzia Dax', 'Lieutenant Commander', 'Science Officer', 'Trill');
const nog = new Officer ('Nog', 'Lieutenant Junior Grade', 'Helmsman', 'Ferengi')