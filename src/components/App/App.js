import React, { useState, useEffect } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Header from '../Header'
import HomePage from '../../pages/HomePage'
import LoginPage from '../../pages/LoginPage'
import About from '../../pages/AboutPage'
import { getAuthToken } from '../../utils'
import { getMe } from '../../WebAPI'
import { AuthContext } from '../../contexts'
import PostPage from '../../pages/PostPage'

const App = () => {
  const [user, setUser] = useState([null])

  useEffect(() => {
    if (getAuthToken()) {
      getMe().then(response => {
        if (response.ok === 1) {
          setUser(response.data)
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/posts/:id" children={<PostPage />} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  )
}

export default App