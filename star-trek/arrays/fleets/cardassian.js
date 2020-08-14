new class Starship {
    constructor(name, registry, type) {
        this.name = name,
        this.registry = registry,
        this.type = type,
        this.photo = '',
        this.info = ''
    }
}

const koranak = new Starship('CDS Koranak', 'unknown', 'Keldon-class battleship');
const kraxon = new Starship('CDS Kraxon', 'CUW-8381', 'Galor-class battleship');
const prakesh = new Starship('CDS Prakesh', 'CUW-8481', 'Galor-class battleship');
const vetar = new Starship('CDS Vetar', 'CUW-8254', 'Galor-class warship')