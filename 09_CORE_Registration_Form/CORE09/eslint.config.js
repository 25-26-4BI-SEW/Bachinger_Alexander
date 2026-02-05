import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    ...vue.configs["flat/recommended"],

    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {...globals.browser},
        },
        rules: {
            indent: ["error", 4],
            semi: ["error", "always"],
        },
    },

    {
        files: ["**/*.vue"],
        languageOptions: {
            globals: {...globals.browser},
        },
        rules: {
            "vue/multi-word-component-names": "off",

            indent: "off",

            "vue/script-indent": ["error", 4],
            "vue/html-indent": ["error", 4],

            semi: ["error", "always"],

            "vue/max-attributes-per-line": ["error", {
                singleline: {
                    max: 10
                },
                multiline: {
                    max: 1
                }
            }],
            "vue/prop-name-casing": ["error", "snake_case"]
        },
    },
];
