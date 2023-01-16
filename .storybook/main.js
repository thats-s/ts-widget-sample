module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/preset-scss",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-storysource",
        "@storybook/addon-notes/register",
        "@whitespace/storybook-addon-html"
    ],
    "framework": "@storybook/html"
}
