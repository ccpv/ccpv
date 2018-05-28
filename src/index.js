import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'

// Redux and Router
import { store, history } from './modules'

// Static Files
import './index.css'
import registerServiceWorker from './assets/registerServiceWorker'

// Containers
import { Header, Top, ToDo } from 'containers'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <div>
          {/* Routing */}
          <Route exact path="/" component={Top} />
          <Route path="/todo" component={ToDo} />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
