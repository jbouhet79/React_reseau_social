import { useState } from "react"
// HOOK : useState --> permet de définir un état à un composant

import Feed from "../Components/Feed"
import Navigation from "../Components/Navigation"
import { getNewestPost, getPostById, getTrendingPost } from "../Services/postApi"
import PostCard from "../Components/PostCard"


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

    let postEl
    if(post) {
       postEl = (<div>
            <PostCard id={post?.id} owner={post?.owner} content={post?.content} />
        </div>)
    }
    // n'affiche la "zone post" que si un post est cliqué

    return (
        <div>
            {/* {user ? (<div>Bonjour {user.nom}!</div>) : undefined} */}
            {user && (<div>Bonjour {user.nom}!</div>)}
            {/* user est récupéré via le Props dans la fct FeedPage */}
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

