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

const kirk = new Officer ('James Tiberius Kirk', 'Captain', 'Commanding Officer', 'Human');
const spock = new Officer ('Spock', 'Commander', ['First Officer', 'Science Officer'], 'Vulcan/Human');
const scotty = new Officer ('Montgomery Scott', 'Chief Engineer', 'Human');
const bones = new Officer ('Leonard "Bones" McCoy', 'Lieutenant Commander', 'Chief Medical Officer', 'Human');
const uhura = new Officer ('Nyota Uhura', 'Lieutenant', 'Communications Officer', 'Human');
const sulu = new Officer ('Hikaru Sulu', 'Lieutenant', 'Helmsman', 'Human');
const chekov = new Officer ('Pavel Chekov', 'Ensign', 'Navigator', 'Human')