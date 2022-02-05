import React from 'react';
import Field from '../components/Field';
import { useSelector } from 'react-redux';
//KOMPONENTA KOJA PRIKAZUJE MAP METODOM SVE POJEDINACNE FILED KOMPONENTE
function Fields() {  
    const fields = useSelector(state => state.fields);//UCITANA SU POLJA IZ STATE-A

    return  ( 
        <>                                        
            {
                //MAPIRANJE: MAP FJA PROLAZI KROZ NIZ
                //TEKUCI ELEMENT PREDSTAVLJA PRVI PARAMETAR-FIELD
                //INDEKS JE DRUGI PARAMETAR-I
                fields.map(function(field, i){           
                    return(              
                    <Field key={i} index={i}/>
                    //VRACAMO IZ KOMPONENTE FIELD SA INDEKSA I I KLJUCA I VREDNOST
                    )
                })
            }    

        </>
    );
}


export default Fields;