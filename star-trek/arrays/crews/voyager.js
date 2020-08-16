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

const janeway = new Officer ('Kathryn Janeway', 'Captain', 'Commanding Officer', 'Human');
const chakotay = new Officer ('Chakotay', 'Commander (provisional)', 'First Officer', 'Human');
const tuvok = new Officer ('Tuvok', 'Lieutenant Commander', 'Security Officer', 'Vulcan');
const paris = new Officer ('Thomas Eugene Paris', 'Lieutenant Junior Grade', 'Helmsman', 'Human');
const belanna = new Officer ('B\'Elanna Torres', 'Lieutenant Junior Grade (provisional)', 'Chief Engineer', 'Klingon/Human');
const kim = new Officer ('Harry Kim', 'Ensign', 'Operations Officer', 'Human');
const doctor = new Officer (['The Doctor', 'Schweitzer', 'Shmullus', 'Joe'], 'none', 'Chief Medical Officer', 'Hologram')