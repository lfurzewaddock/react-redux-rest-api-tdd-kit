import { select as d3Select } from "d3";

function hof({ select = d3Select } = {}) {
  return function barChart() {
    const width = 960;
    const height = 500;
    let svg = null;

    return function draw(_selection) {
      _selection.each(function eachSelection() {
        buildSVG(this);
      });
    };

    function buildSVG(container) {
      if (!svg) {
        if (container.tagName.toLowerCase() === "svg") {
          svg = select(container).classed("bar-chart", true);
        } else {
          svg = select(container)
            .append("svg")
            .classed("bar-chart", true);
        }
      }
      svg
        .transition()
        .attr("width", width)
        .attr("height", height);
    }
  };
}

export default hof;
