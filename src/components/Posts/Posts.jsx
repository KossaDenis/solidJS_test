import axios from "axios"
import { createSignal, createEffect, Show } from "solid-js";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MyModal from "../UI/MyModal/MyModal";
import PostsList from "./PostsList/PostsList";

const Posts = () => {

    const [posts, setPosts] = createSignal([])
    const [title, setTitle] = createSignal('')
    const [body, setBody] = createSignal('')
    const [modal, setModal] = createSignal(false)

    createEffect(() => {
        fetchPosts()
    })

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
        setModal(false)
    }

    function removePost(post) {
        setPosts(posts().filter(p => p.id !== post.id))
    }

    return (
        <div>
            <div class="mb-4">
                <div class={'flex justify-end'}>
                    <MyButton script={() => setModal(true)}>New Post</MyButton>
                </div>
                <MyModal modal={modal} setModal={setModal} >
                    <MyInput
                        value={title()}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title" />
                    <MyInput
                        value={body()}
                        onChange={e => setBody(e.target.value)}
                        placeholder="Body" />
                    <div class={'flex justify-end'}>
                        <MyButton script={addNewPost}>Create Post</MyButton>
                    </div>
                </MyModal>
            </div>
            <Show when={posts().length !== 0} fallback={<div class={'text-xl'}>Post list is empty</div>}>
                <PostsList removePost={removePost} posts={posts} />
            </Show>
        </div>
    )
}

export default Posts