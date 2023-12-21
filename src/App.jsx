import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import MoviesList from './components/Movieslist';
import MovieCardDetails from './components/MovieCardDetails';
import Header from './components/Header';
import Form from './components/Form';
function App() {
  return (
   <BrowserRouter>
   <div className="App">
   <Header/>
   <Routes>
        <Route path="/" element={<MoviesList />}/>
          {/* <Route index element={<Header/>} /> */}
          <Route path="/moviesummary" element={<MovieCardDetails />} />
          <Route path="/bookshow" element={<Form />} />

    </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
