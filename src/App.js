import './App.css';
import Overview from './components/Overview';
import { data } from './Data';

function App() {
  return (
    <div className='max-w-screen-xl p-5'>
     {
      data.map((item,i) => <Overview key={i} item={item} />)
     }
    </div>
  );
}

export default App;
