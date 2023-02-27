import { Route, Routes } from 'react-router-dom'
import { Products } from './pages/fruits/Products'
import { Home } from './pages/home/Home'
import { ToastContainer } from 'react-toastify';
import { Vagetables } from './pages/vagetables/Vagetables'
import { AddEditVagetable } from './pages/add-edit/add-edit-vagetables/AddEditVagetable'
import { AddEditFruit } from './pages/add-edit/add-edit-fruit/AddEditFruit'
import { Login } from './pages/login/Login';
import { useState } from 'react';
import { PrivateRoutes } from './components/private-routes/PrivateRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  return (
    <div className='wrapper'>
      <ToastContainer autoClose={500} />
      <Routes>
        <Route element={<PrivateRoutes setName={setName} setSurname={setSurname} name={name} surname={surname} />}>
          <Route path='/' element={<Home />} />
          <Route path='/add-fruit' element={<AddEditFruit />} />
          <Route path='/add-vagetable' element={<AddEditVagetable />} />
          <Route path='/edit-fruit/:id' element={<AddEditFruit isEditForm={true} />} />
          <Route path='/edit-vagetable/:id' element={<AddEditVagetable isEditForm={true} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/vagetables' element={<Vagetables />} />
        </Route>
        <Route element={<Login name={name} setName={setName} surname={surname} setSurname={setSurname} />} path="/login" />
      </Routes>
    </div>
  )
}

export default App
