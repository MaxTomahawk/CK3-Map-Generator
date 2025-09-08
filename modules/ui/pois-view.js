"use strict";

// CK3 integration: placeholder for Points of Interest view
// Will visualize travel points such as capitals, passes and holy sites.

function init() {}

function show() {
  if (customization) return;
  console.info("POIs View is not yet implemented");
}

function hide() {
  console.info("POIs View hidden");
}

function showLayer() {
  gPOIs.style("display", null);
}

function hideLayer() {
  gPOIs.style("display", "none");
}
window.poisView = {init, show, hide, showLayer, hideLayer};

