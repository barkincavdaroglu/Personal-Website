import React from "react";
import "../index.css"
import {Link, Router, Switch, Route} from "react-router-dom"
import {createBrowserHistory} from 'history'
import './NavBar.css'

const history = createBrowserHistory()

export default class NavBar extends React.Component {
    state = {
        className: "Header",
        navBackground: "transparent"
    };
    componentDidMount() {
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 120 ? "Header" : "scrolled";
            this.setState({ className: backgroundcolor });
        });
    };
    render() {
        return (
            <Router history={history}>
                <div className={`${this.state.className}`}>
                    <div className="HeaderGroup">
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>
                        <div className="gradient-border">
                            <Link to="/contact"><button>Contact</button></Link>
                        </div>
                        <Switch>
                            <Route exact path="/">

                            </Route>
                            <Route path="/blog">

                            </Route>
                            <Route path="/contact">

                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

/*
export default function NavBar() {
    return (
        <Router history={history}>
            <div className="Header">
                <div className="HeaderGroup">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact"><button>Contact</button></Link>
                    <Switch>
                        <Route exact path="/">

                        </Route>
                        <Route path="/blog">

                        </Route>
                        <Route path="/contact">

                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}*/
