import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// open and close this modal using redux state
const Modal = (props) => {
    const dialogRef = useRef();
    const isModalOpen = useSelector(store => store.app.isModalOpen)

    useEffect(() => {
        if (dialogRef?.current) {
            dialogRef?.current.addEventListener("click", e => {
                const dialogDimensions = dialogRef?.current.getBoundingClientRect()
                if (
                    e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom
                ) {
                    closeModal()
                }
            });

            if (isModalOpen)
                dialogRef.current.showModal();
            else
                closeModal()
        }
    }, [isModalOpen]);

    const closeModal = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
    }

    return <dialog ref={dialogRef} className={props.className} key={props.key}>
        {props.children}
    </dialog>;
}


export default Modal;