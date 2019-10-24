import React from "react";
import { Formik, Field, Form } from "formik";

import { CardFormStyled } from "./styled";

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

const CreditCardForm = () => {
  return (
    <CardFormStyled>
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
                <Field
                  name="expirDate.month"
                  type="text"
                  className="expirDateMonth"
                />
                <Field
                  name="expirDate.year"
                  type="text"
                  className="expirDateYear"
                />
                <Field name="cvv" type="text" className="cvv" />
              </div>
            </div>
            <div className="submitButton">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </CardFormStyled>
  );
};

export default CreditCardForm;
