import s from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = ({
    label,
    onClick
}) => {
    return (
        <button 
        	className = {s.button}
			onClick = {onClick}
        >
            {label}
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