import './App.css';

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src="https://unavatar.io/pedroAraoz" alt="Asvatar de Pedro" />
                <div className='tw-followCard-info'>
                    <strong>Pedro Araoz</strong>
                    <span calssName='tw-followCard-infoUserName'>@pedro_araoz</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}