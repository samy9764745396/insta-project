 import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import "./CreatePost.css";


const CreatePost = () => {
    const [post, setPost] = useState({})            //{}-- this indicates data will be given in json format
    const navigator = useNavigate()                    // confusion

    const postData = async (e) => {
        e.preventDefault();
        console.log(post)

        const formData = new FormData()
        formData.append("image", post.image)                                      // appending key value here
        formData.append("name", post.name)
        formData.append("location", post.location)
        formData.append("description", post.description)

        const config = {
            headers:{"Content-type:multipart/form-data"}          // telling brower what kind of data it can expect..
        }
        await axios.post("", formData, config)
        .then((res) => {
            console.log("post", res)

        }).catch((err) => console.log(err))

        navigator("/post")
    }


    return (



        <div id="form-data">
            <Header />
            <form method="POST" onSubmit={postData} >
                <input id="file-container" type="file" onChange={(e) => setPost({ ...post, image: e.target.files[0] })} name="image" />
                <input id="name-container" type="text" onChange={(e) => setPost({ ...post, name: e.target.value })} placeholder="Author" name="name" />
                <input id="location-container" type="text" onChange={(e) => setPost({ ...post, location: e.target.value })} placeholder="Location" name="location" />
                <input id="description-container" type="text" onChange={(e) => setPost({ ...post, description: e.target.value })} placeholder="Description" name="description" />
                <button id="post-submit" type="submit">POST</button>
            </form>

        </div>
    )
}

export default CreatePost