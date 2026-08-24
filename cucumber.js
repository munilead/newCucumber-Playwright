module.exports = {
  default: {
    paths: ["feature/**/*.feature"],
    requireModule: ["tsx/cjs"],
    require: ["step-definitions/**/*.ts"],
    format: ["progress",
      "html:reports/cucumber-report.html"

    ]
  }
};