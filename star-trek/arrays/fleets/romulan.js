new class Starship {
    constructor(name, registry, type) {
        this.name = name,
        this.registry = registry,
        this.type = type,
        this.photo = '',
        this.info = ''
    }
}

const belak = new Starship('Belak', 'unavailable', 'D\'deridex-class warbird');
const dera = new Starship('D\'era', 'unavailble', 'Shuttle')