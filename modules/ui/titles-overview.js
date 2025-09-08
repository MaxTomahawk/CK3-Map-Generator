"use strict";

// CK3 integration: placeholder for Titles overview panel
// Intended to show hierarchical title tree and allow drag-and-drop
// reassignment. The full implementation will be added in later phases.

function init() {}

function show() {
  if (customization) return;
  console.info("Titles View is not yet implemented");
}

function hide() {
  console.info("Titles View hidden");
}

function showLayer() {
  gTitles.style("display", null);
}

function hideLayer() {
  gTitles.style("display", "none");
}
window.titlesOverview = {init, show, hide, showLayer, hideLayer};

