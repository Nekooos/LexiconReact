import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    return 'require';
  }
};
 
const length = (value, props) => {
  if (!value.toString().trim().length > props.maxLength) {
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 