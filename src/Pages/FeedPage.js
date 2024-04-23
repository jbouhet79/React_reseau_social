import { useState } from "react"
// HOOK : useState --> permet de définir un état à un composant

import Feed from "../Components/Feed"
import Navigation from "../Components/Navigation"
import { getNewestPost, getPostById, getTrendingPost } from "../Services/postApi"
import PostCard from "../Components/PostCard"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";



export default function FeedPage({user}) {
    // avec le Props user pour effectuer le lien avec l'elt parent
    const [currentFeed, setCurrentFeed] = useState("trendings")
    // HOOK : useState --> permet de définir un état à un composant

    const [postId, setPostId] = useState(null)

    const onPostSelect = (id)=> {
        setPostId(id)
    }

    let feedEl
    if(currentFeed === 'newest') {
        feedEl = <Feed 
            feedType="Newest" 
            feedContent={getNewestPost()}
            onPostSelect={onPostSelect}/>
            
    } else {
        feedEl = <Feed 
            feedType="Trendings" 
            feedContent={getTrendingPost()}
            onPostSelect={onPostSelect}
            />
    }

    const post = getPostById(postId)

    const navigate = useNavigate()
    // hook pour gérer la navigation

    let postEl
    if(post) {
       postEl = (<div>
            <PostCard id={post?.id} owner={post?.owner} content={post?.content} />
        </div>)
    }
    // n'affiche la "zone post" que si un post est cliqué

    return (
        <div>
            {user ? <div>Bonjour {user.pseudo}</div> : <Link to="/login" >Connexion</Link>}
            
            {/* MA Version !!!!!!!!! */}
            {/* {user ? (<div>Bonjour {user.nom}!</div>) : undefined} */}
            {/* {user && (<div>Bonjour {user.nom}!</div>)} */}
            {/* user est récupéré via le Props dans la fct FeedPage */}

            <div>
                <br/>
                {/* <button onClick={<Link to="/login" ></Link>}>Changer de user </button> */}
                <button onClick={()=>{navigate('/login')}}>Changer de user </button>
                <br/>
            </div>

            <div>
                <br/>
                <button onClick={()=>navigate('/logout')}>Se déconnecter </button>
                {console.log(user)}
                <br/>
                <br/>
            </div>



            <div>
                {postEl}
                {/* <PostCard id={postMessage.id} */}
                {/* <PostCard id={post?.id} owner={post?.owner} content={post?.content} /> */}
            </div>
            <Navigation
                currentFeed={currentFeed}
                onTrendingClick={()=>{ setCurrentFeed("trendings") }}
                onNewestClick={()=> { setCurrentFeed("newest") }}
            />
            {feedEl}
            {/* <Navigation
                onTrendingClick={()=>{ setCurrentFeed()}}
            />
            <Feed feedType="Newest" feedContent={getNewestPost()}/>
            <Feed feedType="Trendings" feedContent={getTrendingPost()}/> */}
            {/* feedContent et feedType sont les parmètres définis et transmis par le component parent : Feed  */}
        </div>
    )
}
    // return (
    //     <div>
    //         <div>
    //             <a href="#trendings"><button>Trendings</button></a>
    //             <a href="#newest"><button>Newest</button></a>
    //         </div>
    //         <h1>Trendings feeds</h1>

    //         {/* <div>
    //             {/* {
    //                 json.map(post=> (
    //                     <div>
    //                         <h2>Post {post.id}</h2>
                            
    //                         <p>{post.content}</p>
    //                     </div>
    //                 ))
    //             } */}

    //             {/* ou avec le component importé : import PostCard from "../Components/PostCard" */}

    //             {/* {
    //                 jsonTrending.map(post=> (
    //                    <PostCard id={post.id} owner={post.owner} content={post.content}/>
    //                 ))
    //             } */}
    //             {/* idem à : */}
    //             {/* <div>
    //                 <h2>Post 1</h2>
                    
    //                 <p>Content 1</p>
    //             </div>
                
    //             <div>
    //                 <h2>Post 2</h2>
                    
    //                 <p>Content 2</p>
    //             </div> */}
    //         </div> */}
    //     </div>
    // )

