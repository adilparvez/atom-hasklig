module.exports =
  execute: () ->
    body = document.body

    triggerMeasurements = () ->
      atom.workspace.increaseFontSize()
      atom.workspace.decreaseFontSize()

    apply = (weight) ->
      body.setAttribute('hasklig-font', "hasklig-#{weight}")
      triggerMeasurements()

    apply(atom.config.get('hasklig.haskligWeight'))

    atom.config.observe('hasklig.haskligWeight',
      () -> apply(atom.config.get('hasklig.haskligWeight'))
    )

    setTimeout(triggerMeasurements, 500)
