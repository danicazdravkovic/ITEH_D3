import React, {useState} from 'react';
import { Route, Link, Routes, BrowserRouter, NavLink } from 'react-router-dom';
//u react router dom-u postoje komponente koje su ugradjene i mozemo da ih koristimo 
//poput Routes, BrowserRouter,NavLink..
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar} from 'react-bootstrap';

import './App.css';

function App() {

  //pomocu dispatch
  const dispatch = useDispatch(); //koristimo da pristupimo reducer-u
  const fields = useSelector(state => state.fields); //uzimamo polja iz state

  const resetTable = () =>
    {
      dispatch({type: 'RESET'})  //preko dispicera saljemo akciju reset reducer-u, reducer poziva akciju reset
      fields.forEach(field => {//za svako polje postavljamo vrednost prazan string
        field.value = ''
      })
    }






    //Route predstavljaju stranice na sajtu i one se nalaze unutar BroowserRouter-a
    //deo unutar Navbara se izvrsava za OBE stranice
    //za prvu rutu kada se pojavi samo / pravimo komponentu koja predstavlja tablu za x o GamePage
    //kada se pojavi /result pravimo komponetu koja predstavlja rezultate resultPage

    //clasname="link" predstavlja linkove koji se nalaze gore u cosku za svaku stranicu

    //RETURN PREDSTAVLJA ONO STO SE PRIKAZUJE NA HTML STRANICI
    //NAVBAR JE KOMPONENTA KOJU SMO PREUZELI IZ REACT BOOTSTRAP NISMO JE SAMI PRAVILI 

    //BROWSERROUTER,ROUTS,ROUT,NAVLINK smo importovali iz react-router-dom
    //BROWSERROUTER-OMOTAC-SVE RUTE MORAJU BITI U OKVIRU BROWSERROUTER-A
    //ROUTES-JE KAO SWITCH, ROUTE JE KAO CASE
    //<Route path="putanja" element={sta se prikazuje na toj putanji}

    //NavLink koristimo umesto link taga <a...> 
    //to koristimo umesto href="putanja" => <NavLink exact to="/"> ISTO KAO <a href="/">

    
  return (
    <BrowserRouter >  

        <div className="app">
          <Navbar >
          <div className='cont'>              
            <NavLink exact to="/" className="link"  activeClassName='is-active'>
                <i className="fa fa-home"></i> <span>Game</span>
            </NavLink>            
            <NavLink to="/result" className="link" activeClassName='is-active' >
                <i className="fa fa-user"></i> <span>Result</span>
            </NavLink>         
          </div>
          </Navbar>
          
          <Routes>
              <Route exact path="/" element={<GamePage resetTable = {resetTable} />} />
              <Route exact path="/result" element={<ResultPage />} />   
                        
          </Routes>
        </div>
    </ BrowserRouter >
  );
}

export default App;