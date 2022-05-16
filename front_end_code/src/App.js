
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexRoutes from './Routes/Index.Routes';

function App() {
  const listRoutes = IndexRoutes;
  return (
    <div className="App">
      <Router>
        <Routes>
          {
            listRoutes.map(
              (route, index) =>
                <Route
                  key={index}
                  exact path={route.path}
                  element={route.main}
                />
            )
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
