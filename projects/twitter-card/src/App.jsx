import { useState } from "react";
import './App.css';
import { TwitterFollowCard } from './TwitterFolowCard.jsx'
export { TwitterFollowCard } from './TwitterFolowCard.jsx'

const users = [
    {
        userName: 'pedro_araoz',
        name: 'Pedro Araoz',
        isFollowing: true
    },

    {
        userName: 'omar.adra',
        name: 'Omar Adra',
        isFollowing: false
    },

    {
        userName: 'braianb98',
        name: 'Braian Barrionuevo',
        isFollowing: true
    },

]

export function App() {
    

    return (
        <section className="App">
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>

                )
                
            })
        }
        </section>
        
    )

}