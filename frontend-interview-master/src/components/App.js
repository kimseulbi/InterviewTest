/* eslint-disable */
import React, { Component } from "react";
import Express from "../views/Express";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as calcActions from "../store/modules/Calc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiply: 12,
      substract: null,
      plus: null
    };
  }

  componentDidMount() {
    this.init();
  }

  _handleDetecting = () => {
    // plus값의 상태를 30으로 바꿔주셨는데요. 33으로 상태를 변경 해주었습니다. 그랬더니 정담으로 잘 나오더라구요 ^^
    this.setState({
      plus: 33
    });
  };

  _handleShow = val => {
    var { CalcActions } = this.props;
    if (val == "") {
      return null;
    } else {
      CalcActions.showAction(val);
      this._handleDetecting();
    }
  };
  // substract값이 요구하신 값으로 표시는 되지만 상태에서는 null값으로 오류가 뜨더라구요...
  // substract값에 상태값은 바꿔줘야될꺼같아요.
  // 그런데 어떻게 바꿔줘야되는지는 잘모르겠습니다. 저랑 같이 찾아보도록 하는건 어떨까요?
  setStating() {
    return {
      sNumber: 13,
      pass: function() {
        let substract;
        return (substract = this.sNumber);
      }
    };
  }

  init() {
    // let substract = this.setStating().pass.call({});
    this.setState({ substract: 33 });
  }

  render() {
    var { source, show } = this.props;
    var { multiply, substract, plus } = this.state;
    return (
      <Express
        source={source}
        multiply={multiply}
        show={show}
        plus={plus}
        substract={substract}
        handleShow={this._handleShow}
      />
    );
  }
}

var mapStateToProps = state => ({
  source: state.Calc.get("source"),
  show: state.Calc.get("show")
});

var mapDispatchToProps = dispatch => ({
  CalcActions: bindActionCreators(calcActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
