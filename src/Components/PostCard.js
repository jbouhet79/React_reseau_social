export default function PostCard({id, owner, content}) {
    return (<div className="card">
        <h2>Post {id}</h2>
        
        <p>{content}</p>
    </div>)
}


// Exemple :

// export default function Post({id, owner, children}) {
//     return (
//         <div id={id}>
//             <span>{owner}</span>
//             <p>{children}</p>
//         </div>
//     )
// }

// ou == idem - ancienne version en définissant d'abord une constante

// const Post = ({id, owner, children}) => {
//     return (
//         <div id={id}>
//             <span>{owner}</span>
//             <p>{children}</p>
//         </div>
//     )
// }

// export default Post;