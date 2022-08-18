
const MyButton = ({ children, script }) => {
    return (
        <button
            onClick={script}
            class="border-2 border-teal-700 p-1 hover:bg-teal-700 hover:text-white transition w-full tablet:w-max">
            {children}
        </button>
    )
}

export default MyButton