# atom-hasklig

This package bundles the [Hasklig](https://github.com/i-tu/Hasklig/) font for atom.

All weights of the font are included.

Ligatures can be enabled per scope, using rules to match scopes.

Rules are applied left to right, for example
- `*` = enable for all scopes
- `*, not:text.*` = enable for all scopes, except for scopes under text
- `source.haskell, source.purescript, source.elm` = enable for haskell, purescript, and elm
- `*, not:source.*, source.js.*` = enable for all scopes, except for scopes under source, and enable for scopes under source.js

Ligatures are disabled in strings.

![screenshot-editor](https://raw.githubusercontent.com/adilparvez/atom-hasklig/master/screenshot-editor.png)
