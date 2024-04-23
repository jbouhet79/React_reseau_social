import PostCard from "./PostCard";

export default function Feed({ feedType, feedContent, onPostSelect }) {
    // fct avec les paramètres (Props) choisis : feedType et feedContent
    return (
        <div>
            <h2>{feedType} feeds</h2>
            <div>
                {
                    feedContent.map(post=> (
                        <a onClick={()=>onPostSelect(post.id)}><PostCard id={post.id} owner={post.owner} content={post.content}/></a>
                        // <PostCard id={post.id} owner={post.owner} content={post.content}/>
                    ))
                }
            </div>
        </div>
    )
}