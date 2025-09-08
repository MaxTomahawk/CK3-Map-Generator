"use strict";

// CK3 integration: placeholder for Validator panel
// Will display issues preventing a successful export.

function init() {}

function show() {
  if (customization) return;
  console.info("Validator panel is not yet implemented");
}

function hide() {
  console.info("Validator panel hidden");
}

window.validatorView = {init, show, hide};

