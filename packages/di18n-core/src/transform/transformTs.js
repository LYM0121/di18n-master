const presetTypescript = require('@babel/preset-typescript').default;
const transformJs = require('./transformJs');

module.exports = function transformTs(code, localeInfo = {}, options = {}, notEditCode) {
  const {
    allTranslated = {},
    allUpdated = {},
    allUsedKeys = [],
  } = localeInfo;

  const {
    primaryRegx = /[\u4e00-\u9fa5]/,
    i18nObject = 'intl',
    i18nMethod = 't',
    importCode = "import { intl } from 'di18n-react';",
    babelPresets = [],
    babelPlugins = [],
    ignoreComponents = [],
    ignoreMethods = [],
    ignoreAttributes = ['style', 'className'],
  } = options;

  return transformJs(
    code,
    {
      allTranslated,
      allUpdated,
      allUsedKeys,
    },
    {
      primaryRegx,
      i18nObject,
      i18nMethod,
      importCode,
      babelPresets: [
        ...babelPresets,
        [presetTypescript, { isTSX: true, allExtensions: true }],
      ],
      babelPlugins,
      ignoreComponents,
      ignoreMethods,
      ignoreAttributes,
    },
    notEditCode,
  );
};
