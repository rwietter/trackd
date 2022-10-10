module.exports = {
	rules: {
		"header-max-length": () => [0, "always", 72],
		"type-enum": () => [2, "always", ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"]],
		"type-case": () => [2, "always", "lower-case"],
		"type-empty": () => [2, "never"],
		"scope-case": () => [2, "always", "lower-case"],
		"subject-empty": () => [2, "never"],
	},
	extends: ["@commitlint/config-conventional"],
};
