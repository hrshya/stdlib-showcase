import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Main } from './pages/Main';
import { Upload } from './pages/Upload';
import { Images } from './pages/Images';
import { Edit } from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/' element={<Main />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/images' element={<Images />} />
        <Route path='/images/:id/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
