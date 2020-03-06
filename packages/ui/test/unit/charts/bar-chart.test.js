// eslint-disable-next-line import/no-extraneous-dependencies
import test from "tape";
import d3WithoutTransition from "../../d3-without-transition";
import isNodeEnvironment from "../../utils";
import barChartHof from "../../../src/charts/bar-chart";

function setup() {
  const isNode = isNodeEnvironment();
  var globalObj = {};
  if (isNode) {
    if (
      typeof global.jsTddKitLfurzewaddockComGithub !== "object" ||
      typeof global.jsTddKitLfurzewaddockComGithub.jsdom !== "object"
    ) {
      throw new Error(
        "jsTddKitLfurzewaddockComGithub namespace or jsdom on namespace does not exist!"
      );
    }
    const { JSDOM } = global.jsTddKitLfurzewaddockComGithub.jsdom;
    globalObj = new JSDOM().window;
  } else {
    globalObj = window;
  }
  const el = globalObj.document.createElement("div");
  el.setAttribute("id", "fixture1");
  globalObj.document.body.appendChild(el);

  const d3 = d3WithoutTransition(globalObj.document);

  const fixtures = {
    isNode,
    window: globalObj,
    document: globalObj.document,
    divElement: el,
    d3,
  };

  // Create fresh fixture/objects each time setup() is called.
  return fixtures;
}

function teardown(fixtures) {
  // Dispose fixtures
  fixtures.document.body.innerHTML = "";
  // Assign reference to null for GC
  fixtures = null; // eslint-disable-line no-param-reassign
}

test("barChart", t => {
  t.test("typeof", assert => {
    const message = "should be a function ";
    const expected = "function";
    const actual = typeof barChartHof;

    assert.equal(actual, expected, message);

    assert.end();
  });
  t.test("when called with d3 select on existing svg", assert => {
    const fixtures = setup();
    const svg = fixtures.document.createElement("svg");
    fixtures.divElement.appendChild(svg);

    const { d3 } = fixtures;
    const { select } = d3;

    const container = select(svg);
    const barChart = barChartHof({ select });
    container.datum([]).call(barChart());

    const actual = container.node();

    assert.equals(actual.tagName.toLowerCase(), "svg", "uses existing svg");
    assert.equals(
      actual.getAttribute("class"),
      "bar-chart",
      "with expected class name"
    );
    assert.equals(
      parseInt(actual.getAttribute("width"), 10),
      960,
      "with expected width"
    );
    assert.equals(
      parseInt(actual.getAttribute("height"), 10),
      500,
      "with expected height"
    );

    teardown(fixtures);
    assert.end();
  });
  t.test("when called with d3 select on existing container", assert => {
    const fixtures = setup();
    const div = fixtures.divElement;

    const { d3 } = fixtures;
    const { select } = d3;

    const container = select(div);
    const barChart = barChartHof({ select });
    container.datum([]).call(barChart());

    const actual = container.node();
    const { children } = actual;
    const lastChild = children[children.length - 1];

    assert.equals(
      lastChild.tagName.toLowerCase(),
      "svg",
      "appends new svg to container"
    );
    assert.equals(
      lastChild.getAttribute("class"),
      "bar-chart",
      "with expected class"
    );
    assert.equals(
      parseInt(lastChild.getAttribute("width"), 10),
      960,
      "with expected width"
    );
    assert.equals(
      parseInt(lastChild.getAttribute("height"), 10),
      500,
      "with expected height"
    );

    teardown(fixtures);
    assert.end();
  });
  t.test("when buildContainerGroups is called", assert => {
    const fixtures = setup();
    const div = fixtures.divElement;

    const { d3 } = fixtures;
    const { select } = d3;

    const container = select(div);
    const barChart = barChartHof({ select });
    container.datum([]).call(barChart());

    const containerGroup = fixtures.document.getElementsByClassName(
      "container-group"
    );
    const chartGroup = fixtures.document.getElementsByClassName("chart-group");
    const xAxisGroup = fixtures.document.getElementsByClassName("x-axis-group");
    const yAxisGroup = fixtures.document.getElementsByClassName("y-axis-group");

    assert.equals(
      containerGroup.length,
      1,
      "One container-group element is present"
    );
    assert.equals(
      containerGroup.item(0).nodeName,
      "g",
      "with expected nodeName"
    );
    assert.equals(
      containerGroup.item(0).getAttribute("transform"),
      "translate(40,20)",
      "with expected transform"
    );
    assert.equals(chartGroup.length, 1, "One chart-group element is present");
    assert.equals(chartGroup.item(0).nodeName, "g", "with expected nodeName");
    assert.equals(xAxisGroup.length, 1, "One x-axis-group element is present");
    assert.equals(xAxisGroup.item(0).nodeName, "g", "with expected nodeName");
    assert.equals(yAxisGroup.length, 1, "One y-axis-group element is present");
    assert.equals(yAxisGroup.item(0).nodeName, "g", "with expected nodeName");

    teardown(fixtures);
    assert.end();
  });
});
