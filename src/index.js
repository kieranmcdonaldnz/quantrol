import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ROOT_NODE } from './constants/global'
import APIToggle from './ApiToggle'
import './main.css'

APIToggle()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(ROOT_NODE)
)
