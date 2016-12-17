hasklig = require('./hasklig')

module.exports = {
    config: {
        haskligWeight: {
            type: 'string',
            title: 'Font weight',
            description: 'How "bold" the font is.',
            default: 'medium',
            enum: [
                'extra-light',
                'light',
                'regular',
                'medium',
                'semibold',
                'bold',
                'black'
            ],
            order: 1
        },
        enabledScopes: {
            type: 'array',
            title: 'Enabled scopes',
            description: 'Scopes to enable ligatures for, these can be found by looking in language-x packages.',
            default: ['source.haskell', 'source.purescript', 'source.elm'],
            order: 2
        }
    },
    activate: (state) => atom.packages.onDidActivateInitialPackages(hasklig.load)
}
