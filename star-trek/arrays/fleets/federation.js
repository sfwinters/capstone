class Starship {
    constructor (name, registry, type) [
        this.name = name,
        this.registry = registry,
        this.type = type,
        this.photo = '',
        this.info = '',
    ]
}

const defiant = new Starship('USS Defiant', 'NX-74205', 'Defiant-class');
const ent1 = new Starship('USS Enterprise', 'NCC-1701', 'Constitution-class');
const ent2 = new Starship('USS Enterprise', 'NCC-1701-D', 'Galaxy-class');
const voyager = new Starship('USS Voyager', 'NCC-74656', 'Intrepid-class')