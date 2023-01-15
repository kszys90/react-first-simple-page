import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
    render(props) {
        const { title, logo } = this.props
        return (
            <>
                <footer id={'footer'}>
                    <div
                        className={'header_title-container'}
                        style={{
                            backgroundColor: 'black'
                        }}>
                        <h5 style={{
                            color: 'white',
                            textAlign: 'center',
                            paddingTop: '10px',
                            paddingBottom: '10px'
                        }}>{title}</h5>
                    </div>
                    <div
                        className={'header_logo-container'}>
                        <img src={logo}></img>
                    </div>
                </footer >
            </>
        )
    }
}

Footer.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string,
}


export default Footer
