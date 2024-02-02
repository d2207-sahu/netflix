import React from "react"
import { IconButton } from "./globals"
import { RxCross2 } from "react-icons/rx"

const ModalCloseButton = ({ onClick }) =>
    <IconButton onClick={onClick}>
        <RxCross2 size={'3.2rem'} />
    </IconButton>
export default ModalCloseButton