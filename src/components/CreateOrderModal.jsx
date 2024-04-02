import React, { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";


const CreateOrderModal = () => {

    const [ show, setShow ] = useState(true)

  return (
    <>
      <Modal className='w-5/12 h-3/4 m-auto p-6 bg-orange-200 ' show={show} onClose={() => setShow(false)} size="md" popup>
        <Modal.Header />
        <Modal.Body className=''>
          <div>
            <input type="text" className='bg-red-200' placeholder='Nom de Produit'/>
          </div>
          <div>
            <input type="text" className='bg-red-200' placeholder='Nom de Produit'/>
          </div>
          <div>
            <input type="text" className='bg-red-200' placeholder='Nom de Produit'/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateOrderModal