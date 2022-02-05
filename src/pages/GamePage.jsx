import React from 'react';
import Fields from '../components/Fields';
import PropTypes from 'prop-types';
//KOMPONENTA GAMEPAGE PRIMA FUNKCIJU KAO PARAMETAR KOJU JOJ PROSLEDJUJE KOMPONENNTA KOJA JE POZIVA TO JE App.js KOMPONENTA
function GamePage({resetTable}) {  

  //klikom na crveno dugme vrsi se reset
  //centrira ovaj div
  //fa fa refresh da se ucita strelica
     return  ( 
       <>      
          <div className="fields">                        
            <Fields />   
            <div className='col-md-12' style={{textAlign:'center'}}>  
               
              <button className="reset" onClick={() => resetTable()}>
              <i className="fa fa-refresh"></i>
              </button>
            </div>
          </div>
      </>
     );   

}

export default GamePage;

//property resetTable je tipa funcion
GamePage.propTypes = {
  resetTable : PropTypes.func
}