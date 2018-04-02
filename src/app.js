import React, { Component } from 'react'

import Title from './components/Title'

export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Title />
                <p>
                    This a test project!
                </p>
                <p>For memory test by mutiple operation</p>
                <p>The memory will increase!</p>
                <p>It will release part of the memory, but the reset of memory not.</p>
            </div>
        )
    }
}
