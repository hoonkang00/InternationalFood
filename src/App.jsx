import React,{ useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import TheMap from './Map.jsx'
import CountryList from './CountryList.jsx'


let countries = {
na:"North America",
as:"Asia",
eu: "Europe",
sa: "South America",
af: "Africa",
oc: "Oceania"

}



function App(props) {
    const [continent, setContinent] = useState('Asia')

    console.log(continent)
    let updateState = (e)=>{
        if (e.detail.clickedState!=='none'){
            setContinent(countries[e.detail.clickedState])
        }

    }
    
    useEffect(()=>{
        window.addEventListener('WorldMapClicked', updateState)

        
    },[])


    return (
        <div>
            <h1>Current Continent: {continent}</h1>
            <TheMap/>
            <CountryList selectedCont={continent}/>
            
        </div>
    )

}





ReactDOM.render(
    <App/>, document.getElementById('app')
)