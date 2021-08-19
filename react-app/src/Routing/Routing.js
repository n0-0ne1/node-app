import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"


const Home=()=> <div>Welcome Home</div>
const About=()=> <div>Indiamart</div>
const Contact=()=> <div>#9999999</div>
const ErrorPage=()=> <div>page not found</div>

function Routing() {
    return (
        <Router>
        <div>
            <h1>Routing implementation</h1>
            
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="*">ErrorPage</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/" exact> //will only load home when there is a exact match
                        <Home />
                    </Route>
                    <Route path="/about" >
                        <About />
                    </Route>
                    <Route path="/contact" >
                        <Contact />
                    </Route>
                    <Route path="*" >
                        <ErrorPage />
                    </Route>

                </Switch>

        </div>
        </Router>
    )
}

export default Routing
