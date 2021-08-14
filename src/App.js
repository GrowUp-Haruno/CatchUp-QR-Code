import { useState } from 'react';
import QrReader from 'react-qr-reader';

function App() {
  const [data, setData] = useState({ result: 'No result' });

  const handleError = (err) => {
    console.log(err);
  };
  const handleScan = (data) => {
    data && setData({ result: data });
  };

  return (
    <div>
      <h1>Catch up QR reader</h1>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style ={{width:'500px'}}
      />
      <p>{ data.result}</p>
    </div>
  );
}

export default App;
