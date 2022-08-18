import { createEffect, createSignal } from "solid-js";


const MyModal = ({ children, modal, setModal }) => {

    const [visible, setVisible] = createSignal('hidden')

    createEffect(() => {
        if (modal()) {
            setVisible('flex')
        }else{
            setVisible('hidden')
        }
    })


    return (
        <div onClick={() => setModal(false)} class={`fixed inset-0 ${visible()} bg-black bg-opacity-50 justify-center items-center p-5`}>
            <div onClick={(e) => e.stopPropagation()} class={'p-6 bg-white rounded-2xl w-[600px] min-w-[300px]'}>
                {children}
            </div>
        </div>
    )
}

export default MyModal