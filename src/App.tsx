import React, {useEffect} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home} from './components/home/home';
import {useDispatch, useSelector} from "react-redux";
export const App: React.FC = () => {
const dispatch = useDispatch();  
  return (
    <div>
      <Router>          
        <Switch>
          <Route
            path="/home" component={Home}
          />  
          <Route
            path="*" component={Home}
          />
        </Switch>        
      </Router>
    </div>
  );
}

