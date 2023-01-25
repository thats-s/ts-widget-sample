module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order',
    ],
    rules: {
        'block-no-empty': true,
        'shorthand-property-no-redundant-values': true,
        'number-leading-zero': 'never',
        'string-quotes': 'double',
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'no-descending-specificity': null,
    },
};
