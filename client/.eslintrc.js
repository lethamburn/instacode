module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/class-name-casing': 'warn',
        'no-restricted-properties': 'off',
        'guard-for-in': 'warn',
        '@typescript-eslint/interface-name-prefix': ['warn', 'never'],
        'no-labels': 'warn',
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-caller': 'warn',
        'no-bitwise': 'warn',
        'no-console': ['warn', { allow: ['log', 'error', 'info', 'time', 'timeEnd', 'trace'] }],
        'no-multiple-empty-lines': 'warn',
        'no-new-wrappers': 'warn',
        'no-debugger': 'warn',
        'no-redeclare': 'warn',
        'no-empty': 'warn',
        'no-eval': 'warn',
        'no-shadow': 'warn',
        'dot-notation': 'off',
        'no-fallthrough': 'warn',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'arrow-body-style': ['error', 'as-needed'],
        radix: 'off',
        'default-case': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        eqeqeq: ['warn', 'smart'],
        '@typescript-eslint/typedef': [
            'warn',
            {
                parameter: true,
                propertyDeclaration: true,
                arrayDestructuring: false,
                arrowParameter: false,
                memberVariableDeclaration: false,
                objectDestructuring: false,
                variableDeclaration: false,
            },
        ],
        'react/display-name': 'off',
        'react/prop-types': 'off',
    },
};
