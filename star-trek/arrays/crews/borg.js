class BorgDrone {
    constructor (bio) {
        this.bio = 'We are the Borg. Lower your shields and surrender your ships. We will add your biological and technological distinctiveness to our own. Your culture will adapt to serve us. Resistance is futile.'
    }
}

const drone1 = new BorgDrone;
const drone2 = new BorgDrone;
const drone3 = new BorgDrone;
const drone4 = new BorgDrone;
const hugh = new BorgDrone;
hugh.bio =  'We are Hugh.'

console.log(drone1, hugh)