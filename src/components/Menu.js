import React from 'react'
import PropTypes from 'prop-types'

const Menu = props => {
    const { elements } = props
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'

        }}>
            <div
                style={{
                    backgroundColor: 'Khaki',
                    width: '200px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '120%',
                    borderStyle: 'solid' 
                }}>
                <a href={elements[0].url}>{elements[0].name}</a>
            </div>
            <div
                style={{
                    backgroundColor: 'Khaki',
                    width: '200px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '120%',
                    borderStyle: 'solid' 
                }}>
                <a href={elements[1].url}>{elements[1].name}</a>
            </div>
            <div
                style={{
                    backgroundColor: 'Khaki',
                    width: '200px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '120%',
                    borderStyle: 'solid' 
                }}>
                <a href={elements[2].url}>{elements[2].name}</a>
            </div>
        </div>
    )
}

Menu.propTypes = {
    elements: PropTypes.array,
}

export default Menu