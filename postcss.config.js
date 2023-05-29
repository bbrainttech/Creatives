const cssnano = require('cssnano'),
    autoprefixer = require('autoprefixer'),
    postcssPresetEnv = require('postcss-preset-env');


module.exports = {
    plugins: [
        cssnano({
            preset: 'default',
        }),
        postcssPresetEnv({ stage: 3 }),
        autoprefixer({ grid: 'autoplace' })
    ],
}