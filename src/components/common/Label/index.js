import React from 'react';
import PropTypes from 'prop-types';
 
 const Label = ({ text }) => {
    return (
        <div>
            <label>{text}</label>
        </div>
    );
 }

Label.propTypes = {
    text: PropTypes.string,
}

 export default Label;