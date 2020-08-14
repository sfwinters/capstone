new class Starship {
    constructor(name, registry, type) {
        this.name = name,
        this.registry = registry,
        this.type = type,
        this.photo = '',
        this.info = ''
    }
}

const treasure = new Starship('Quark\'s Treasure', 'unavailable', 'Shuttle');
const sepulo = new Starship('Sepulo', 'unavailable', 'Transport')