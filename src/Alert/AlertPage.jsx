var React = require('react');
var AlertButton = require('Alert/AlertButton.jsx');

class AlertPage extends React.Component {
  render() {
    let texts = ['hello', 'zet', 'moomoo'];
    return (
      <div>
        {texts.map(t => <AlertButton text={t} />)}
        {
          texts.length >= 3 ? <button>true</button> : <button>false</button>
        }
        {/*<AlertButton text='hello'/>
        <AlertButton text='zet'/>
        <AlertButton text='moomoo'/>*/}
      </div>
    );
  }
}

module.exports = AlertPage;
