"use strict";

// CK3 integration: placeholder for Barony-level editor
// Real implementation will allow barony editing.

function init() {}

function show() {
  if (customization) return;
  console.info("Baronies View is not yet implemented");
}

function hide() {
  console.info("Baronies View hidden");
}

function showLayer() {
  gBaronies.style("display", null);
}

function hideLayer() {
  gBaronies.style("display", "none");
}
window.baroniesEditor = {init, show, hide, showLayer, hideLayer};

