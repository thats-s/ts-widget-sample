module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order',
        'stylelint-config-prettier',
    ],
    rules: {
        'block-no-empty': true,
        'shorthand-property-no-redundant-values': true,
        'string-quotes': 'double',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'no-descending-specificity': null,
    },
};
