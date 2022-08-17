
const MyButton = ({ children, script }) => {
    return (
        <button
            onClick={script}
            className=" border border-black p-1 hover:bg-black hover:text-white transition">
            {children}
        </button>
    )
}

export default MyButton