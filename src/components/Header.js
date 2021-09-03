import PropTypes from 'prop-types'
import Button from './Button'

//rafce
const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <div>
            <h1 style={headingStyle}>{title}</h1>
            <Button color='green' text='Add' onClick= {onClick}></Button>
            <Button color='blue' text='Hello2'></Button>
            
        </div>
    )
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

// Header.defaultProps = {
//     title: 'using default props'
// }

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header
