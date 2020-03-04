import { select as d3Select } from "d3";

function hof({ select = d3Select } = {}) {
  return function barChart() {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960;
    const height = 500;
    let svg = null;

    return function draw(_selection) {
      _selection.each(function eachSelection() {
        buildSVG(this);
      });
    };

    /**
     * Builds containers for the chart, the axis and a wrapper for all of them
     * Also applies the Margin convention
     * @private
     */
    function buildContainerGroups() {
      const container = svg
        .append("g")
        .classed("container-group", true)
        .attr("transform", `translate(${margin.left},${margin.top})`);

      container.append("g").classed("chart-group", true);
      container.append("g").classed("x-axis-group axis", true);
      container.append("g").classed("y-axis-group axis", true);
    }

    function buildSVG(container) {
      if (!svg) {
        if (container.tagName.toLowerCase() === "svg") {
          svg = select(container).classed("bar-chart", true);
        } else {
          svg = select(container)
            .append("svg")
            .classed("bar-chart", true);
        }
        buildContainerGroups();
      }
      svg
        .transition()
        .attr("width", width)
        .attr("height", height);
    }
  };
}

export default hof;
