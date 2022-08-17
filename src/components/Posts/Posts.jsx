import axios from "axios"
import { createSignal, createEffect } from "solid-js";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import PostsList from "./PostsList/PostsList";

const Posts = () => {

    const [posts, setPosts] = createSignal([])
    const [title, setTitle] = createSignal('')
    const [body, setBody] = createSignal('')
    const [text, setText] = createSignal('')

    createEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
            setPosts(responce.data)
        }
        catch (e) {
            alert(e)
        }
    }

    function addNewPost() {
        if (title() !== '' && body() !== '') {
            const newPost = {
                id: Date.now(),
                title: title(),
                body: body()
            }
            setPosts([...posts(), newPost])
        }
        setTitle('')
        setBody('')
    }

    function removePost(post) {
        setPosts(posts().filter(p => p.id !== post.id))
    }

    createEffect(() => {
        if (posts().length == 0) {
            setText('Post list is empty')
        } else {
            setText('')
        }
    }, [posts()])

    return (
        <div>
            <div className=" mb-4 ">
                <MyInput
                    value={title()}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title" />
                <MyInput
                    value={body()}
                    onChange={e => setBody(e.target.value)}
                    placeholder="Body" />
                <MyButton script={addNewPost}>Create Post</MyButton>
            </div>
            <PostsList removePost={removePost} posts={posts} />
            <h1 className=" text-xl">{text()}</h1>
        </div>
    )
}

export default Posts