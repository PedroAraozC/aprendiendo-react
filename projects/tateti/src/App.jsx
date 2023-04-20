import { useState } from "react";
import './App.css';
import { TwitterFollowCard } from './TwitterFolowCard.jsx'
export { TwitterFollowCard } from './TwitterFolowCard.jsx'

export function App() {
    
    const [name, setName] = useState('pedro_araoz')
    console.log('render with name: ', name)

    return (
        <section className="App">
        
            <TwitterFollowCard userName={name}>
                Pedro Araoz
            </TwitterFollowCard> 
            
            <TwitterFollowCard userName="Omar.adra" >
                Omar Adra
            </TwitterFollowCard>
        
            <button onClick={() => setName('Pedro123')}>
                Cambio nombre
            </button>
        </section>
        
    )

}