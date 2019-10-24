import React from "react";
import ReactDOM from "react-dom";

import CreditCardForm from './components/credit-card-form';

class App extends React.Component {
  render() {
    return (
      <div>
          <CreditCardForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
