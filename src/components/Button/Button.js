import './../../styling/theme.css';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({title,onClick,className})=> (<button className='btn secondary-color' onClick={onClick}>{title}</button>);

Button.defaultProps = {
  title: '',
  onClick: ()=>{},
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;