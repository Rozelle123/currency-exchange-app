import logo from './logo.svg';
import './App.css';
import './style.css';
import ShowAppDesc from './ShowAppDesc';
import CurrencyConverter from './CurrencyConverter';
import ShowTechStack from './ShowTechStack';
import CurrencyComparisonTable from './CurrencyComparison';
import { CurrencyProvider } from './CurrencyContext';


function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <ShowAppDesc />
        <ShowTechStack />
        <div className='currency-container'>
          <div className='features-column'>   
          <h3>🖥️ FEATURES</h3>
          <div className='features-list'>
            <br/>
            <p>✅ Live Exchange Rates (via API)
            </p>
            <p>✅ Convert Multiple Currencies</p>
            <p>✅ Auto-Update Conversion on Input Change</p>
            <p>✅ Swap Currencies Function</p>
            <p>✅ Dark & Light Mode</p>
            <p>✅ Responsive Design</p>
          </div>          
          </div>
          <div className='currency-content'>
          <CurrencyConverter />
          </div>
        
            <div className='chart-column'>           
            <CurrencyComparisonTable/>
        </div >  
          
      </div>
    </div>
    </CurrencyProvider>  
  );
}

export default App;
