import { useState } from "react"
// HOOK : useState --> permet de définir un état à un composant

export default function Navigation( {currentFeed, onTrendingClick, onNewestClick} ) {
    // const [currentFeed, setCurrentFeed] = useState("trendings") === maintenant défini dans FeedPage
    return (
        <div>
            <button
                onClick={onTrendingClick} 
                className={ currentFeed === 'trendings' ? 'active' : undefined }
            >Trendings</button>
            {/* change l'état de currentFeed  */}
            <button 
                onClick={onNewestClick}
                className={ currentFeed === 'newest' ? 'active' : undefined }
            >Newest</button>
        </div>
    )
}

function onTrendingClick() {

}

function onNewestClick() {

}