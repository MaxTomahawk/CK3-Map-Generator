"use strict";

// CK3 integration: placeholder for Rulers view
// Will display generated rulers and allow editing.

function init() {}

function show() {
  if (customization) return;
  console.info("Rulers View is not yet implemented");
}

function hide() {
  console.info("Rulers View hidden");
}

function showLayer() {
  gRulers.style("display", null);
}

function hideLayer() {
  gRulers.style("display", "none");
}
window.rulersView = {init, show, hide, showLayer, hideLayer};

