import s from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = ({
    label,
    onClick,
    children
}) => {
    return (
        <button 
        	className = {s.button}
			onClick = {onClick}
        >
            <span className={s.span}>
            {label}{children}
            </span>
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
}

Button.defaultProps = {
    label: "boton",
		onClick: ()=>{}
}

export default Button