import React from "react";

export class TenClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: 10,
      textPlus: "+1",
      textMinus: "-1",
      textReset: "Reset",
      textRandom: "Random",
    };
  }

  nextStep = () => {
    this.setState({
      ten: this.state.ten + 1,
    });
  };
  prefStep = () => {
    this.setState({
      ten: this.state.ten - 1,
    });
  };
  resetStep = () => {
    this.setState({
      ten: 10,
    });
  };
  randomStep = () => {
    this.setState({
      ten: Math.floor(Math.random() * 50),
    });
  };

  render() {
    return (
      <article className="counter__app">
        <div className="counter__title">Класовий компонент</div>
        <div className="counter__flag">{this.state.ten}</div>
        <div className="counter__controls">
          <button className="counter__btn" onClick={this.nextStep}>
            {this.state.textPlus}
          </button>
          <button className="counter__btn" onClick={this.prefStep}>
            {this.state.textMinus}
          </button>
          <button className="counter__btn" onClick={this.randomStep}>
            {this.state.textRandom}
          </button>
          <button className="counter__btn" onClick={this.resetStep}>
            {this.state.textReset}
          </button>
        </div>
      </article>
    );
  }
}
