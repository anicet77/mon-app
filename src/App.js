import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
 
import './App.scss';
 
class App extends React.Component {
 
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul class>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
            <li>
              <Link to="/topics">Service</Link>
            </li>
          </ul>
 
          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Accueil} />
            <Route path="/about" component={Apropos} />
            <Route path="/topics" component={Service} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
 
}
 
class Accueil extends React.Component {
 
  render()  {
    return (
      <div>
        <h2>Accueil</h2>        
      </div>
    );
  }
}
 
class Apropos  extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}
 
class Service extends React.Component {
  render( ) {
    return (
      <div>
        <h2>Topics</h2>
      </div>
    );
  }
}
 
class Topic extends React.Component {
  render()  {
    return (
      <div>
        <h3>
          {this.props.match.params.topicId}
        </h3>
      </div>
    );
  }
}

export default App;
