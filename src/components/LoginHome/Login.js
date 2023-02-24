
import React,{useState} from 'react';
// import china from '../../img/china-nat.jpg'
// import building from '../../img/2020-02-13.jpg'
import './Login.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { Link } from 'react-router-dom';
import {
    faBars,
  faHandDots,
  faTimes,
  faUserDoctor,
  faBone,
  faSkating,
  faVialVirus,
  faUserNurse,
  faCapsules,
  faDumbbell
  
} from "@fortawesome/free-solid-svg-icons";




function Login() {
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);



  return (
    <React.Fragment>
    <div className="App">
      <div className="page">
        <div className="content">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/mejdej93/pen/eYYJGjd"
          >
        
          </a>
        </div>

        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
          <div className="trigger" onClick={handleTrigger}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div className="sidebar-position"   >
          <FontAwesomeIcon icon={ faUserNurse} />
            <Link className='span' to={'/nurse'}>Nurse</Link>
          </div>

          <div className="sidebar-position">
          <FontAwesomeIcon icon={faUserDoctor} />
            <Link className='span' to={'/doctor'}>Doctor</Link>
          </div>

          <div className="sidebar-position">
          <FontAwesomeIcon icon={faHandDots} />
            <Link className='span' to={'/acupressure'}>Acupressure</Link>
          </div>
        
          <div className="sidebar-position">
          <FontAwesomeIcon icon={faDumbbell} />
            <Link className='span' to={'/gym'}>Gym</Link>
          </div>


          <div className="sidebar-position">
          <FontAwesomeIcon icon={faBone} />
            <Link className='span' to={'/physiotherap'}>Physiother</Link>
          </div>

          <div className="sidebar-position">
          <FontAwesomeIcon icon={faSkating} />
           <Link className='span' to={'/massage'}>Massage</Link>
          </div>

          <div className="sidebar-position">
          <FontAwesomeIcon icon={faVialVirus} />
        <Link className='span' to={'/laboratory'} >laboratory</Link>
          </div>

          <div className="sidebar-position">
          <FontAwesomeIcon icon={ faCapsules} />
          <Link className='span' to={'/pharmacy'}>Pharmacy</Link>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Login