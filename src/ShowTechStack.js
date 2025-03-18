import {FaReact} from 'react-icons/fa';
import DashboardIcon from '@mui/icons-material/Dashboard'
import cssIcon from './img/css.png';
import axiosIcon from './img/axios.png';
import jsIcon from './img/javascript.png';
import rqIcon from './img/reactquery.png';

const ShowTechStack = () => {
  return (
    <div>            
      <div className='tech-stack-container'>
      <h1 className='app-desc-p'>TECH STACK:</h1>
      <div className='tech-icon'>        
        <FaReact size={30} color="blue" />
        <span>REACT</span>
      </div>
      <div className='tech-icon'>        
       <img src={jsIcon} 
        style={{width: '45px', height: '25px'}}/>
        <span>JAVASCRIPT</span>
      </div>
      <div className='tech-icon'>
        <img src={cssIcon} alt='css Icon'
        style={{width: '40px', height: '35px'}}/>
        <span>CSS</span>       
      </div>
      <div className='tech-icon'>        
        <DashboardIcon fontSize="large" style={{ color: '#007FFF' }} />
        <span>MATERIAL-UI</span>
      </div>      
      <div className='tech-icon'>
      <img src={rqIcon} alt='css Icon'
        style={{width: '40px', height: '30px'}}/>
        <span>REACT QUERY</span>       
      </div>
      <div className='tech-icon'>
      <img src={axiosIcon} alt='css Icon'
        style={{width: '40px', height: '20px'}}/>
        <span>AXIOS</span>       
      </div>
      </div>
    </div>
  );
}
export default ShowTechStack;