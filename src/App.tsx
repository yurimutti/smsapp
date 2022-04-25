import SendForm from  './components/SendForm'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss'

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <SendForm />
    </div>
  )
}

export default App
