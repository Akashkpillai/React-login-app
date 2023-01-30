import React from 'react';
import Login from './Pages/login'
import Signup from './Pages/signinpage'
import Home from './Pages/Userhome'
import { Routes,Route} from 'react-router-dom'
import{BrowserRouter} from 'react-router-dom'
import Admin from './component/Admin';
import Admindah from './Pages/admindash';

function App() {
 
    return (
       <div className='app'>
<BrowserRouter>
        <Routes>
        <Route  path='/home' element={<Home />} /> 
        <Route path='/Login' element={<Login />} />
        <Route path='/signin' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admindash' element={<Admindah/>} />
        </Routes>
</BrowserRouter>
       </div>
    );
}

export default App;
