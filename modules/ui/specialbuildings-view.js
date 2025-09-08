"use strict";

// CK3 integration: placeholder for Special Buildings view
// Will later allow players to place universities, mines and other
// unique locations.

function init() {}

function show() {
  if (customization) return;
  console.info("Special Buildings View is not yet implemented");
}

function hide() {
  console.info("Special Buildings View hidden");
}

function showLayer() {
  gSpecialBuildings.style("display", null);
}

function hideLayer() {
  gSpecialBuildings.style("display", "none");
}
window.specialbuildingsView = {init, show, hide, showLayer, hideLayer};

