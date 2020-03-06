import { scaleLinear, max } from "d3";
/**
 * Creates y scale function to return output position for input domain datapoint
 */
function yScale({ chartHeight = 450, domainData, getDomainDataFn } = {}) {
  return scaleLinear()
    .rangeRound([chartHeight, 0])
    .domain([0, max(domainData, getDomainDataFn)]);
}

export default yScale;
