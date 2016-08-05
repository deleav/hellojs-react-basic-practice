var React = require('react');

class AlertButton extends React.Component {
  constructor(props) {
    super(props);
    this.alertText = this.alertText.bind(this);
  }

  alertText() {
    alert(this.props.text);
  }

  render() {
    return (
      <button onClick={this.alertText}>我是一個 {this.props.text} 按鈕</button>
    );
  }
}

AlertButton.propTypes = {
  text: React.PropTypes.string,
  num: React.PropTypes.number
}

AlertButton.defaultProps = {
  text: 'default text',
  num: 0
}

module.exports = AlertButton;
