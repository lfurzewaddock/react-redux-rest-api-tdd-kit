import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Line, Chart } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

import "./cont-chart.css";

import CompHeader from "./CompHeader";

import * as actions from "./modules/currencies/actions/fetch";

class ContChart extends Component {
  constructor(props) {
    super(props);

    // chart.js defaults
    Chart.defaults.global.defaultFontColor = "#000";
    Chart.defaults.global.defaultFontSize = 16;

    this.state = {
      historicalData: null,
      selectedCurrency: "GBP",
      baseUrl: "https://api.coindesk.com/",
    };
    this.onCurrencySelect = this.onCurrencySelect.bind(this);
  }

  componentDidMount() {
    this.getBitcoinData();
    const { getCurrencyDataHandler } = this.props;
    getCurrencyDataHandler();
  }

  onCurrencySelect(e) {
    this.setCurrency(e.target.value);
  }

  setCurrency(selectedCurrency) {
    this.setState({ selectedCurrency }, this.getBitcoinData);
  }

  getBitcoinData() {
    const { baseUrl, selectedCurrency } = this.state;

    fetch(`${baseUrl}v1/bpi/historical/close.json?currency=${selectedCurrency}`)
      .then(response => response.json())
      .then(historicalData => this.setState({ historicalData }))
      .catch(e => e);
  }

  formatChartData() {
    const { historicalData } = this.state;
    const { bpi } = historicalData;

    return {
      labels: _.map(_.keys(bpi), date => moment(date).format("ll")),
      datasets: [
        {
          label: "Bitcoin",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(bpi),
        },
      ],
    };
  }

  render() {
    const { historicalData, selectedCurrency } = this.state;
    const { currency } = this.props;
    if (historicalData) {
      return (
        <div className="app">
          <CompHeader title="BITCOIN PRICE INDEX" />
          <div className="select-container">
            <span style={{ fontSize: 18, fontFamily: "Bungee" }}>
              {" "}
              Select your currency:{" "}
            </span>
            <select value={selectedCurrency} onChange={this.onCurrencySelect}>
              {currency.options.map(obj => (
                <option
                  key={`${obj.currency}${obj.country}`}
                  value={obj.currency}
                >
                  {" "}
                  {obj.country}{" "}
                </option>
              ))}
            </select>
            {selectedCurrency !== "PHP" && (
              <div>
                <button
                  className="link"
                  type="button"
                  onClick={() => this.setCurrency("PHP")}
                  style={{ color: "black", fontSize: 16, fontFamily: "Bungee" }}
                >
                  {" "}
                  [CLICK HERE TO RESET]{" "}
                </button>
              </div>
            )}
          </div>

          <div style={{ marginTop: 10 }}>
            <Line data={this.formatChartData()} height={250} />
          </div>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  currency: state.currency,
});

const mapDispatchToProps = dispatch => ({
  getCurrencyDataHandler: () => {
    dispatch(actions.getCurrencyDataHandler());
  },
});

ContChart.propTypes = {
  currency: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
  getCurrencyDataHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContChart);
