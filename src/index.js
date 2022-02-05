import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import {createStore} from 'redux';
import "font-awesome/css/font-awesome.css";
import { Provider } from 'react-redux';
import rootReducer  from './reducer' //importujemo state koji kreira i menja reducer
//store je mesto gde se cuvaju podaci
//store menjamo preko rootReducer-a
const store = createStore(rootReducer);//kreiramo store na osnovu state(objekat sa propertyima)
// koji je inicijalizovan u reducer.js fajlu 

//RENDER METODA PRIMA DVA PARAMETRA-
//1.ELEMENT KOJI SE UMEĆE u prosledjeni html container, napisan je u jsx-u.
//EMELENTU U JSXU se pristupa{prom},, tj const prom=<h1> naslov</h1>, pristup {prom}
//2.CONTAINER-html div element sa nazivom root koji ucitava prosledjeni element na html stranici

ReactDOM.render(

  //UMETNI U HTML DIV CONTAINER "ROOT" ELEMENT PROVIDER
  //JEDNOSTAVNIJE SMO MOGLI DA UMETNEMO ELEMENT <h1>cao</h1>
  //1.PARAMETAR(ELEMENT) ne sme da sadrzi vise od JEDNE KOMPONENTE(NE SME I P I H..., TO SVE TREBA DA SE SPAKUJE NPR U DIV)  
    <Provider store={store}> 
      <App /> 
    </Provider>
    //uzima element iz index.html sa nazivom root i kreira aplikaciju
  , document.getElementById("root")
    
);
