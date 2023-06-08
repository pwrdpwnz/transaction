import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)
