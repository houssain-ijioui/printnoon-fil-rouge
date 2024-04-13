import { useState } from 'react'
import { Modal } from "flowbite-react";
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '@/store/features/order/orderSlice';
import axios from 'axios';
import { getOrders } from '@/store/features/order/orderAction';


const CreateOrderModal = () => {

  const { modal } = useSelector(state => state.order);
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeModal())
  }

  const initialOrderState = {
    nom: "",
    dimensions: "",
    papier: "",
    grammage: "",
    orientation: ""
  };
  const [file, setFile] = useState()
  const [order, setOrder] = useState(initialOrderState)


  const handleFileInput = (e) => {
    setFile(e.target.files[0])
  }

  const handleInput = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value })
  }

  const handleCreateOrder = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append('order', JSON.stringify(order))
      formData.append('file', file)
      await axios.post('http://localhost:8000/user/dashboard/create-order', formData)
      dispatch(closeModal())
      setOrder(initialOrderState)
      dispatch(getOrders())
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Modal className='w-5/12 h-3/4 m-auto p-6' show={modal} onClose={close} size="md" popup>
        <Modal.Header className='bg-secondGrey' />
        <Modal.Body className='bg-secondGrey'>
          <form>
            <div className="mb-4">
              <input name='nom' value={order.nom} onChange={handleInput} required type="text" className='w-full p-2 rounded' placeholder='Nom de Produit' />
            </div>
            <div className="mb-4">
              <select name='dimensions' value={order.dimensions} required id="dimensions" className='w-full p-2 rounded' onChange={handleInput}>
                <option value="" disabled>Dimensions</option>
                <option value="Standard 89× 51">Standard 89× 51</option>
                <option value="Carré 51 × 51">Carré 51 × 51</option>
                <option value="Coins arrondis 89 × 51">Coins arrondis 89 × 51</option>
                <option value="Plié 89 × 102">Plié 89 × 102</option>
              </select>
            </div>
            <div className="mb-4">
              <select name='papier' value={order.papier} onChange={handleInput} required id="papier" className='w-full p-2 rounded'>
                <option value="" disabled>Papier</option>
                <option value="Matt">Matt</option>
                <option value="Brillant">Brillant</option>
              </select>
            </div>
            <div className="mb-4">
              <select name='grammage' value={order.grammage} onChange={handleInput} required id="grammage" className='w-full p-2 rounded'>
                <option value="" disabled>Grammage</option>
                <option value="200g">200g</option>
                <option value="300g">300g</option>
                <option value="400g">400g</option>
              </select>
            </div>
            <div className="mb-4">
              <select name='orientation' value={order.orientation} onChange={handleInput} required id="orientation" className='w-full p-2 rounded'>
                <option value="" disabled>Orientation</option>
                <option value="200g">Verticale</option>
                <option value="300g">Horizontale</option>
              </select>
            </div>
            <div className="mb-4">
              <input name='file' onChange={handleFileInput} required type="file" className='w-full p-2 rounded' placeholder='Nom de Produit' />
            </div>
            <div className='bg-firstBlue text-white font-semibold w-28 h-10 pl-3 rounded-3xl flex items-center'>
              <button onClick={handleCreateOrder} className='w-5 h-5 ml-2' type='submit'>Créer</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CreateOrderModal