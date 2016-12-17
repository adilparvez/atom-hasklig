const HASKLIG_STYLESHEET_ID = 'hasklig-stylesheet'

function onHaskligWeightChange(weight) {
    document.body.setAttribute('hasklig-font', `hasklig-${weight}`)
}

function onEnabledScopesChange(scopes) {
    let sheet = document.getElementById(HASKLIG_STYLESHEET_ID)
    if (sheet != null) {
        sheet.parentNode.removeChild(sheet)
    }

    sheet = document.createElement('style')
    sheet.setAttribute('id', HASKLIG_STYLESHEET_ID)

    sheet.innerHTML = scopes.map((scope) => {
        let dataGrammar = scope.split('.').join(' ')
        return `atom-text-editor[data-grammar='${dataGrammar}'] {\n`
             + `    font-feature-settings: 'liga' 1;\n`
             + `}\n`
    }).join('\n')

    document.body.appendChild(sheet)
}

function load() {
    atom.config.observe('hasklig.haskligWeight', onHaskligWeightChange)
    atom.config.observe('hasklig.enabledScopes', onEnabledScopesChange)
}

module.exports.load = load
