import checkWinner from './helpers/checkWinner'
//sluzi za inicijalizaciju state-a ovaj js

//inicijalizacija niza vrednosti
const initialFields = [
  {value:''},{value:''},{value:''},
  {value:''},{value:''},{value:''},
  {value:''},{value:''},{value:''}
 ];//inicijalno su polja prazni stringovi

 //inicijalno je state objekat 
const initialState = {
    fields: initialFields,//njegov element polja je gore inicijalizovan niz
      player : 'X', //na pocetku igra X igrac
      numberOfWinsX:0, //pocetne vrednosti za br pobeda igraca X
      numberOfWinsY:0 //pocetne vrednosti za br pobeda igraca Y
    };

    //funkcija kora PRAVI reducer-a
    //na pocetku je state=initialState, a akcija moze da bude UPDATE ili RESET
function rootReducer(state = initialState, action) {
  
    switch (action.type) {
      case 'UPDATE':
        const newState = {...state};//uzimamo prethodni state
        newState.fields[action.payload.index].value = action.payload.player; //na prosledjeni index stavljamo naziv igraca
        newState.player = action.payload.player === 'X' ? 'O':'X';//ako je igrac bio X, sada je O, u suprotnom je X
        
        //PROVERA DA LI JE DOBIJENA DOBITNA KOMBINACIJA
        if(checkWinner(newState.fields) !== null)  //ako je ceckWinner razlicit od null imamo dobitnu kombinaciju 
        {       
          console.log(newState.fields)
          if(action.payload.player === 'X')//ako je igrac X onda mu povecavamo br pobeda
            newState.numberOfWinsX++;
          else newState.numberOfWinsY++;
          
          newState.fields.forEach(field => {
              field.value = ''//praznimo polja jer krece nova partija
          })
        }   
       
        return {...state, ...newState  };//ovime setujemo da je vrednost state new state  
      case 'RESET':
       //kada se pozove ovaj tip akcije resetuju se sva polja na prazan string
        state.fields.forEach(field => {
          field.value = ''
        })
     
        return state;
      default:
        return state
    }
  }

  export default rootReducer;//metoda rootReducer se eksportuje, importuje se u index.js i nadalje vazi