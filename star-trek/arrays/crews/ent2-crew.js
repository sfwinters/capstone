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

const picard = new Officer ('Jean-Luc Picard', 'Captain', 'Commanding Officer', 'Human');
const riker = new Officer ('William Thomas Riker', 'Commander', 'First Officer', 'Human');
const data = new Officer ('Data', 'Lieutenant Commander', ['Chief Operations Officer', 'Science Officer'], 'Android');
const troi = new Officer ('Deanna Troi', 'Lieutenant Commander', 'Ship\'s Counselor', 'Betazoid/Human');
const geordi = new Officer ('Geordi LaForge', 'Lieutenant Commander', 'Chief Engineer', 'Human');
const worf = new Officer ('Worf, son of Mogh', 'Lieutenant', ['Tactical Officer', 'Chief Security Officer'], 'Klingon');
const beverly = new Officer ('Dr. Beverly Crusher', 'Commander', 'Chief Medical Officer', 'Human');
const tasha = new Officer ('Natasha "Tasha" Yar', 'Lieutenant', 'Chief Security Officer', 'Human');
const obrien = new Officer ('Miles Edward O\'Brien', 'Senior Chief Petty Officer', 'Transporter Chief', 'Human')

{
    name:
    rank:
    position:
    race:
    photo: '',
    bio: '',
    id: ''
  }