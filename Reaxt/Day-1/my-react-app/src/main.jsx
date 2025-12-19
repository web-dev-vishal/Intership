import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import New from './new.jsx'
import App1_componte from './components/App1.jsx'
import App2 from './props/App2.jsx'
import App3 from './EventHandling/App3.jsx'
import Newjsx from './Condition Rendering/New.jsx'
import New1jsx from './New1.jsx'
import Hooks from './React Hooks/Hooks.jsx'
import New2 from './StyleApproch/New2.jsx'
import ErrorboundaryApp from './Error/Errorboundary.jsx'
import StateManagement from './StateMangement/New3.jsx'
import EventHandling2 from "./EventHandling2/New1.jsx"
import store from './Redix/store/store.js'
import Canteen from './Redix/Canteen.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <New/>
    <App1_componte></App1_componte>
    <New1jsx></New1jsx>
    <ErrorboundaryApp></ErrorboundaryApp>
    <App2></App2>
    <New2></New2>
    <App3></App3> 
    <Newjsx></Newjsx>
    <Hooks></Hooks>
    <StateManagement></StateManagement>
    <EventHandling2></EventHandling2>
    <Provider store={store}>
    <Canteen></Canteen>
    <store></store>
    </Provider>
    
  </StrictMode>,
)