import React from 'react';
//Router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//Components
import App from './app';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';


class AppRouter extends React.Component{
  constructor(props){
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  _ensureLoggedIn(nextState, replace){
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ GreetingContainer }
                 onEnter={this._ensureLoggedIn} />
          <Route path="/login"
                 component={ SessionFormContainer }
                 onEnter={this._redirectIfLoggedIn} />
          <Route path="/signup"
                 component={ SessionFormContainer }
                 onEnter={this._redirectIfLoggedIn} />
          <Route path="search"
                 component={ SearchContainer }
                 onEnter={this._ensureLoggedIn} />
          <Route path="/benches/new"
                 component={ BenchFormContainer }
                 onEnter={this._ensureLoggedIn} />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
