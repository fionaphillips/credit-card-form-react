import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

const initialValues = {
  card: [
    {
      cardNum: "",
      cardName: "",
      expirDate: {
        month: "",
        year: ""
      },
      cvv: ""
    }
  ]
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="row">
                <div className="col">
                  <Field name="cardNum" type="text" />
                </div>
                <div className="col">
                  <Field name="cardName" type="text" />
                </div>
                <div className="col">
                  <Field name="expirDate.month" type="text" />
                  <Field name="expirDate.year" type="text" />
                  <Field name="cvv" type="text" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
