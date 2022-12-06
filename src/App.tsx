
import AppRouter from './components/Router'
import './assets/css/theme.scss'
import { Provider } from 'react-redux'
import { store } from './store'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
     <AppRouter />
     </Provider>
    </div>
  )
}

export default App
