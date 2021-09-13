import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './HomePage';


const WebPages: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Homepage} />
      </Router>
    </>
  )
}
export default WebPages