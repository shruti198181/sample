import { BrowserRouter } from 'react-router-dom';
import Mynavbar from './component/navbar';
import Footer from './component/footer';
function App() {
  return (
    <BrowserRouter>
      <Mynavbar />
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
