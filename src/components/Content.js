import React from 'react'
import PropTypes from 'prop-types'

const Content = props => {
    const { posts } = props
    return (
        <main id={'main'}
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                padding: '20px'

            }}>
            <div
                style={{
                    backgroundColor: 'orange',
                    width: '260px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '120%',
                    borderStyle: 'solid'
                }}>
                <h1>{posts[0].title}</h1>
                <p>{posts[0].body}</p>
                <p style={{
                    backgroundColor: posts[0].color,
                    width: '200px',
                    height: '200px',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }}>
                    I'm an Image!
                </p>
            </div>
            <div
                style={{
                    backgroundColor: 'orange',
                    width: '260px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '120%',
                    borderStyle: 'solid'
                }}>
                <h1>{posts[1].title}</h1>
                <p>{posts[1].body}</p>
                <p style={{
                    backgroundColor: posts[1].color,
                    width: '200px',
                    height: '200px',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }}>
                    I'm an Image!
                </p>
            </div>
            <div
                style={{
                    backgroundColor: 'orange',
                    width: '260px',
                    padding: '10px',
                    textAlign: 'center',
                    fontSize: '120%',
                    borderStyle: 'solid'
                }}>
                <h1>{posts[2].title}</h1>
                <p>{posts[2].body}</p>
                <p style={{
                    backgroundColor: posts[2].color,
                    width: '200px',
                    height: '200px',
                    marginRight: 'auto',
                    marginLeft: 'auto'
                }}>
                    I'm an Image!
                </p>
            </div>
        </main>
    )
}

Content.propTypes = {
    posts: PropTypes.array,
}


export default Content