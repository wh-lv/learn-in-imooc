import React, { Component } from 'react'
import { BrowserRouter, Link,Routes , Route } from 'react-router-dom'
import Home from '@/components/Home'
import About from '@/components/About'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '前端 22'
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <BrowserRouter>
                    <Link to='/home'>首页</Link>
                    <Link to='/about'>关于</Link>

                    <Routes>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App