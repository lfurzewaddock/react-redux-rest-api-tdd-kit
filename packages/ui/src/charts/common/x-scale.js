import { scaleBand } from "d3";

/**
 * Creates x scale function to return output band position for input domain datapoint
 */
function xScale({
  chartWidth = 900,
  padding = 0.1,
  domainData,
  getDomainDataFn,
} = {}) {
  const test = scaleBand()
    .rangeRound([0, chartWidth])
    .padding(padding)
    .domain(domainData.map(getDomainDataFn));

  return test;
}

export default xScale;
