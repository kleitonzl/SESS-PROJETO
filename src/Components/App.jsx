import { BrowserRouter, Routes, Route } from 'react-router-dom'
// BrowserRouter deve ser o componente pai que envolve tudo que depende do React-Router
// Routes define a área em que vamos colocar os nossos Route.
// O Route recebe um caminho em Path, se esse caminho for o mesmo da URL ele irá renderizar o componente que estiver dentro de Element={}

import Feedbacks from './Feedbacks';
import Header from './Header';
import Home from './Home';
import Rodape from './Rodape';
import Agendamento from './Agendamento';


const App = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes> 
                <Route path='/' element={<Home/>}/>
                <Route path='/feedbacks' element={<Feedbacks/>}/>
                <Route path='/agendamento' element={<Agendamento paragraph={'dasdasdasdasdasdasd'} />}/>
            </Routes>
        <Rodape/>
        </BrowserRouter>
    )
}

export default App;