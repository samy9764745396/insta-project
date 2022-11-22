import { useEffect, useState } from "react"
import Card from "./Card";
import Header from "./Header";
import axios from 'axios';

const PostView = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get("https://my-instaclone-server.herokuapp.com/")     // need to change this
            .then((res) => {
                setPost(res.data.reverse())         // confusion
            })
    }, [])

    return (
<div>
    <Header/>
        <div className="post-container">
            {post.Map((post,i) =>{
                return(
                    <Card post={post} key={i}/>
                )
            })}
        </div>
    
</div>
        )
}
export default PostView