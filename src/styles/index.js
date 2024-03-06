const choices = {
    color: {
        verde: '#18A773',
        verdeOscuro: '#116F4D',
        morado: '#8D5DB1',
        moradoOscuro: '#66457F',
        black: '#000000',
        white: '#ffff'
    }
}

const decisions = {
    color: {
        primary: choices.color.verde,
        secondary: choices.color.morado,
        black: choices.color.black,
        white: choices.color.white,
        "primary-hover": choices.color.verdeOscuro,
        "secondary-hover": choices.color.moradoOscuro,
    }
}

module.exports = { choices, decisions }

