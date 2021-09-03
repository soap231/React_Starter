import PropTypes from 'prop-types'


const Button = (props) => {
    return (
        <button onClick = {props.onClick} style={{backgroundColor: props.color}}>{props.text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button
