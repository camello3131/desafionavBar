import React, {useState, useEffect} from 'react'
import ItemList from '../item/ItemList'
import ItemCount from '../itemCount/ItemCount'
import "./ItemListContainer.css"

const productos = [
  {
      id: 0,
      name: "coca",
      price: 15,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg/220px-Bouteille_de_Coca-Cola_d%27un_litre_cinq_001.jpg"
  }, 
  {
      id: 1,
      name: "7 up",
      price: 15,
      img: "https://madistribucion.com/wp-content/uploads/2021/02/7up.png"
  }, 
  {
      id: 2,
      name: "fanta",
      price: 15,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000"
  }, 
  {
      id: 3,
      name: "otra fanta",
      price: 15,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000"
  }, 
  {
      id: 4,
      name: "otra otra fanta",
      price: 15,
      img: "https://carrefourar.vtexassets.com/arquivos/ids/220123/7790895000454_02.jpg?v=637704294056530000"
  }
]



function ItemListContainer(props) {

  const [data, setData] = useState ([])

  useEffect(()=>{
    const getData = new Promise (resolve => {
      setTimeout(() => {
        resolve (productos)
      }, 1000);
    })

    getData.then (res => setData(res))
  }, [])

  return (
      <>
      
      <div className='container cont-cards'>
      <ItemList data={data}/>
      </div>
      </>
  )
}

export default ItemListContainer
