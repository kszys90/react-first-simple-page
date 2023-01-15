import React from 'react'
import PropTypes from 'prop-types'


const Header = props => {
    const { title, logo } = props
    return (
        <>
            <header id={'header'}>
                <div
                    className={'header_logo-container'}>
                    <img src={logo}></img>
                </div>

                <div
                    className={'header_title-container'}
                    style={{
                        backgroundColor: 'red'
                    }}>
                    <h1 style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '250%',
                        paddingTop: '40px',
                        paddingBottom: '40px'
                    }}>{title}</h1>
                </div>

            </header >
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
}

export default Header
