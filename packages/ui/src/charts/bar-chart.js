import { axisBottom, axisLeft, select as d3Select } from "d3";
import xScale from "./common/x-scale";
import yScale from "./common/y-scale";

function hof({ select = d3Select } = {}) {
  return function barChart() {
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 960;
    const height = 500;
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    let svg = null;

    /**
     * Creates the graph x scale from domain data
     * @private
     */
    function getXScaleFn(data, axisWidth) {
      return xScale({
        chartWidth: axisWidth,
        padding: 0.1,
        domainData: data,
        getDomainDataFn: d => {
          return d.letter;
        },
      });
    }

    /**
     * Creates the graph y scale from domain data
     * @private
     */
    function getYScaleFn(data, axisHeight) {
      return yScale({
        chartHeight: axisHeight,
        domainData: data,
        getDomainDataFn: d => {
          return d.frequency;
        },
      });
    }

    /**
     * Creates the d3 x axis, setting orientations
     * @private
     */
    function buildXAxis(xScaleFn) {
      return axisBottom(xScaleFn);
    }

    /**
     * Creates the d3 y axis, setting orientations
     * @private
     */
    function buildYAxis(yScaleFn) {
      return axisLeft(yScaleFn).ticks(10, "%");
    }

    /**
     * Draws the x and y axis on the svg object within their
     * respective groups
     * @private
     */
    function drawAxis(xAxis, yAxis, translateHeight) {
      svg
        .select(".x-axis-group.axis")
        .attr("transform", `translate(0, ${translateHeight})`)
        .call(xAxis);

      svg.select(".y-axis-group.axis").call(yAxis);
    }

    /**
     * Draws the bar elements within the chart group
     * @private
     */
    function drawBars(data, xScaleFn, yScaleFn) {
      select(".chart-group")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .transition()
        .attr("class", "bar")
        .attr("x", d => xScaleFn(d.letter))
        .attr("y", d => yScaleFn(d.frequency))
        .attr("width", xScaleFn.bandwidth())
        .attr("height", d => chartHeight - yScaleFn(d.frequency));
    }

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

    return function draw(_selection) {
      _selection.each(function eachSelection(_data) {
        const data = _data;

        buildSVG(this);
        const xScaleFn = getXScaleFn(data, chartWidth);
        const yScaleFn = getYScaleFn(data, chartHeight);
        const xAxis = buildXAxis(xScaleFn);
        const yAxis = buildYAxis(yScaleFn);
        drawAxis(xAxis, yAxis, chartHeight);
        drawBars(data, xScaleFn, yScaleFn); // WIP
      });
    };
  };
}

export default hof;
