# Change Log
<!-- Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file. -->

## [Unreleased]

## [1.1.1] - 2021-02-09
- Undo unnecessary vscode engine change
- Update docs on publishing extension package

## [1.1.0] - 2021-02-09
### Added
- Support for nested `.marko` files, e.g. `custom-tag/src/index.marko`, instead of only `custom-tag/index.marko`
- Support for `.marko` files named after the component, e.g. `custom-tag.marko`, instead of only `custom-tag/index.marko`
### Security
- Update subdepencies flagged by Dependabot: minimist, acorn, eslint-utils, lodash, diff, js-yaml, fstream, tar

## [1.0.2] - 2019-02-12
### Security
- `lodash` dev dependency: CVE-2018-16487, upgrade to >= 4.17.11
- `extend` dev dependency: CVE-2018-16492, upgrade to >= 3.0.2
- `node.extend` dev dependency: CVE-2018-16491, upgrade to >= 1.1.7

## [1.0.1] - 2018-06-19
### Added
- Marko icon for thumbnail

### Changed
- Edited README to include VS Marketplace link

## [1.0.0] - 2018-06-18
- Initial release