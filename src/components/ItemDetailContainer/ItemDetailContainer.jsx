import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducto } from '../../helpers/gProductos'
import { ItemDetail } from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const { productoId } = useParams()


  useEffect(() => {
    getProducto(productoId).then(Item => {
      setProducto(Item)
    })

  }, [productoId])

    return (
      <ItemDetail/>
    )
 }

  export default ItemDetailContainer
