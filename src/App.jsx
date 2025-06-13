import { BrowserRouter } from 'react-router-dom';
import Mynavbar from './component/navbar';
import Footer from './component/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Mynavbar />
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
