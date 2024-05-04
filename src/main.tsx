import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/app/index.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
