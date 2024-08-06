import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Topbutton from './linkbutton'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Mobiledata from './mobileproductlog'
import Mobilecart from './Mobilecart'
function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes >
            <Route element={<Topbutton />} >
              <Route path="/" element={<Mobiledata />} />
              <Route path="/cart" element={<Mobilecart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
