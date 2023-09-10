'use client'

import { useRef } from "react";

const Modal = () => {
  const modalRef: any = useRef()
  const modalElement: HTMLElement = modalRef.current!

  const closeModal = () => {
    if (modalElement) modalElement.classList.add('hidden')
  }

  return (
    <div ref={modalRef} className="fixed h-screen w-screen inset-0 flex items-center justify-center">
      <div onClick={closeModal} className="fixed h-screen w-screen inset-0 bg-red-500 cursor-pointer opacity-25">.</div>
      <div className="absolute z-20 opacity-100 bg-green-500">Content</div>
    </div>
  )
}

export default Modal;