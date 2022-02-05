import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'; 
import { useState } from "react";
//Komponenta Filed prima index kao parametar, a poziva se u komponenti Fildes, gde se dodeljuje idex i key, key nam ne treba
function  Field ({index}) {
 
    const dispatch = useDispatch();//koristimo dispecera
    const [player, setPlayer] = useSelector((state) => state.player);//uzimamo koji je igrac 
    const field = useSelector(state => state.fields.find((f,i) => i === index ))//pronalazimo polje sa odredjemin indeksom
    //f je value na tom indeksu
    //svako polje stata je jedan element niza koji ima odredjenu vrednost value, inicijalno ''
    const [buttonClass, setButtonClass ]= useState("field");//INICIJALNA VREDNOST ZA buttonClass je "field"
    //VREDNOST MENJAMO METODOM setButtonClass jer konstanta const ne moze drugacije da se menja
   
   //FUNKCIJA KOJA SE DEFINISE OVDE, A POZIVA U RETURNU
    const onPlay = () => {
        if(field.value === '')//vradnost polja iz stata ako je prazna 
            dispatch({type: 'UPDATE', payload: { player: player, index : index } })
            //dispicer poziva update akciju i ucitava igraca i indeks polja
    }



    return(
       //na prelaz misa se setuje klasa za dugme, i polje postaje ljubicasto
       //na napustanje polja misem se setuje klasa za dugme, polje vise nije ljubicasto
       //na klik se poziva on play fja
       //inner-field postavlja vrednost na field.value
       //NA CLICK SE POZIVA GORENAVEDENA METODA onPlay()
       //na polje se u okviru spana postavlja uneta vrednost
        <button onMouseLeave={() => setButtonClass("field")} onMouseEnter={() => setButtonClass("field field-active")} 
        className={buttonClass} onClick= {() => onPlay()}>          
            <span className="inner-field"> {field.value} </span>
        </button>
    )
}

export default Field;

//definisanje tip za svaki property
Field.propTypes = {
    index : PropTypes.number//index je tipa number
}