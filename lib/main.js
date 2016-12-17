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
            description: 'Scopes to enable ligatures for. These can be found by looking in the language-x package for language x. Note that for some syntaxes some ligatures might not work due to the tokeniser (e.g. the JavaScript tokeniser breaks -> into two symbols).',
            default: ['source.haskell', 'source.purescript', 'source.elm'],
            order: 2
        }
    },
    activate: (state) => atom.packages.onDidActivateInitialPackages(hasklig.load)
}
