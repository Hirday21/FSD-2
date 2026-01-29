import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LocalStateCounter from './components/CounterLocalState.jsx'
import CounterContextParent from './components/CounterGlobalContextParent.jsx'
import CounterReduxParent from './components/CounterGlobalReduxParent.jsx'
import { CounterContextProvider } from './components/context/CounterGlobalContextAPI'

function App() {
  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Experiment - State Management (Local / Context / Redux)</h1>

      <LocalStateCounter cno="1" />
      <LocalStateCounter cno="2" />

      <CounterContextProvider>
        <CounterContextParent cno="1" />
        <CounterContextParent cno="2" />
      </CounterContextProvider>

      <CounterReduxParent cno="1" />
      <CounterReduxParent cno="2" />
    </div>
  )
}

export default App
