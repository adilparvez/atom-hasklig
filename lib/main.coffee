module.exports =
  config:
    haskligWeight:
      type: 'string'
      title: 'Font weight'
      description: 'How "bold" the font is.'
      default: 'regular'
      enum: [
        'extra-light'
        'light'
        'regular'
        'medium'
        'semibold'
        'bold'
        'black'
      ]
  activate: (state) ->
    atom.packages.onDidActivateInitialPackages(
      () ->
        hasklig = require('./hasklig')
        hasklig.execute()
    )
