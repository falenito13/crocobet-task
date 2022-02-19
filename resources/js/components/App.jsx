import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, useParams} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';

import Routers from './routes'

function App() {
    return (
        <Routers/>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Router><App/></Router>, document.getElementById('app'));
}
