const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json'],
        alias: {
            'ra-core': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-core',
                'src'
            ),
            'ra-ui-materialui': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-ui-materialui',
                'src'
            ),
            'react-admin': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'react-admin',
                'src'
            ),
            'ra-data-fakerest': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-data-fakerest',
                'src'
            ),
            'ra-i18n-polyglot': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-i18n-polyglot',
                'src'
            ),
            'ra-input-rich-text': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-input-rich-text',
                'src'
            ),
            'ra-tree-core': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-tree-core',
                'src'
            ),
            'ra-tree-ui-materialui': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-tree-ui-materialui',
                'src'
            ),
        },
    },
};
