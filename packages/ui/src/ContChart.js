import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Line, Chart } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

import "./cont-chart.css";

import CompHeader from "./CompHeader";

import * as actionsCurrencies from "./modules/currencies/actions/fetch";
import * as actionsBitcoinPricePoints from "./modules/bitcoin-price-points/actions/fetch";

class ContChart extends Component {
  constructor(props) {
    super(props);

    // chart.js defaults
    Chart.defaults.global.defaultFontColor = "#000";
    Chart.defaults.global.defaultFontSize = 16;

    this.state = {
      selectedCurrency: "GBP",
    };
    this.onCurrencySelect = this.onCurrencySelect.bind(this);
  }

  componentDidMount() {
    const { selectedCurrency } = this.state;
    const {
      getCurrencyDataHandler,
      getBitcoinPricePointsDataHandler,
    } = this.props;
    getCurrencyDataHandler();
    getBitcoinPricePointsDataHandler(selectedCurrency);
  }

  onCurrencySelect(e) {
    this.setCurrency(e.target.value);
  }

  setCurrency(selectedCurrency) {
    this.setState({ selectedCurrency }, this.getBitcoinData);
  }

  formatChartData() {
    const { bitcoinPricePoints } = this.props;
    const { pricePoints } = bitcoinPricePoints;
    const { bpi } = pricePoints;

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
    const { selectedCurrency } = this.state;
    const { currency, bitcoinPricePoints } = this.props;
    if (
      !bitcoinPricePoints.isPending &&
      !(
        Object.entries(bitcoinPricePoints.pricePoints).length === 0 &&
        bitcoinPricePoints.pricePoints.constructor === Object
      )
    ) {
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
  bitcoinPricePoints: state.bitcoinPricePoints,
});

const mapDispatchToProps = dispatch => ({
  getCurrencyDataHandler: () => {
    dispatch(actionsCurrencies.getCurrencyDataHandler());
  },
  getBitcoinPricePointsDataHandler: selectedCurrency => {
    dispatch(
      actionsBitcoinPricePoints.getBitcoinPricePointsDataHandler(
        selectedCurrency
      )
    );
  },
});

ContChart.propTypes = {
  currency: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
  bitcoinPricePoints: PropTypes.shape({
    isPending: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    pricePoints: PropTypes.shape({
      bpi: PropTypes.objectOf(PropTypes.number),
      disclaimer: PropTypes.string,
      time: PropTypes.shape({
        updated: PropTypes.string.isRequired,
        updatedISO: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  getCurrencyDataHandler: PropTypes.func.isRequired,
  getBitcoinPricePointsDataHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContChart);
