import MyButton from "../../UI/MyButton/MyButton"

const PostsItem = ({ post, removePost }) => {



    return (
        <div className=" p-2 border border-black mb-4 flex items-center justify-between">
            <div>
                <h2 className=" font-medium ">{post.title}</h2>
                <p className=" max-w-5xl ">{post.body}</p>
            </div>
            <div className=" mr-3">
                <MyButton script={() => removePost(post)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostsItem