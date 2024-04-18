import './css/styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import CreateBook from './components/CreateBook';
import axios from 'axios';

axios.defaults.baseURL=process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001'

function App() {
  return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<BookList />} />
          <Route path="/create" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
