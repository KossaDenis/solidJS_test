import MyButton from"../../UI/MyButton/MyButton"

const PostsItem = ({ post, removePost }) => {

    return (
        <div class="p-2 border-2 rounded-lg border-teal-700 mb-4 flex items-center justify-between flex-col tablet:flex-row">
            <div>
                <h2 class="font-medium">{post.title}</h2>
                <p class="max-w-5xl">{post.body}</p>
            </div>
            <div class=" mt-2 w-full tablet:w-max tablet:ml-2">
                <MyButton script={() => removePost(post)}>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostsItem