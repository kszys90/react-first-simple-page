import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'
import Footer from './Footer'

const App = () => {
    return (
        <div
            style={{
                maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'pink'
            }}>
            <Header
                title={'Przykładowa wygenerowana strona'}
                logo={'#'}>
            </Header>
            <Menu
                elements={[{ name: 'header', url: '#header' }, { name: 'main', url: '#main' }, { name: 'footer', url: '#footer' }]}
            />

            <Content
                posts={[
                    { title: 'Hello React', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: 'yellow' },
                    { title: 'Hello React', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: 'blue' },
                    { title: 'Hello React', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: 'green' }
                ]}
            />
            <Menu
                elements={[{ name: 'header', url: '#header' }, { name: 'main', url: '#main' }, { name: 'footer', url: '#footer' }]}
            />
            <Footer
                title={'Strona wygenerowana w ramach pierwszego projektu Reactowego'}
                logo={'#'}></Footer>

        </div >
    )
}

export default App