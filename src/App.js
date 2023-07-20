import './assets/css/style.css';
import { Button } from 'react-bootstrap';
import Popup from './components/Popup';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='btn-center'>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </div>
      <Popup handleClose={handleClose} show={show} />
    </>
  );
}

export default App;
