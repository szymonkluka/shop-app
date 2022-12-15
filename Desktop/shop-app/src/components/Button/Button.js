import styles from './Button.module.scss';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';

const Button = ({ action, className, children }) => {
    return (<button onClick={action} className={clsx(styles.button, className)}>{children}</button>);
};

Button.propTypes = {
    action: PropTypes.func.isRequired
};


export default Button;

