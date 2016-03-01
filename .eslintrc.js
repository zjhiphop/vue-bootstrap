module.exports = {
	"root": true,
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	"extends": "standard",
	// required to lint *.vue files
	"plugins": [
		"html"
	],
	"env" : {
		"es6": true
	},
    "parser": "babel-eslint",
    // add your custom rules here
	"rules": {
		// allow paren-less arrow functions
		"arrow-parens": 0,
		// allow debugger during development
		"no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,

		// formatting, spaces, operators
		"indent": [2, 4],
		"semi": [2, "always"],
        "space-before-function-paren": [2, "never"]
    },
    "globals": {
        "localStorage": true,
        "sessionStorage": true,
        "wx": true,
        "alert": true,
        "confirm": true,
        "location": true
    }
};
