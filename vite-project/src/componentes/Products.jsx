import React, {useState} from "react";
import Form from "./Form";
import Table from "./Table";

const initialDb = [
    {
        "id": "01",
        "name": "Café Americano",
        "price": 5,
        "image": "",
        "type": "desayuno",
        "dateEntry": ""
      },
      {
        "id": "02",
        "name": "Café con Leche",
        "price": 7,
        "image": "",
        "type": "desayuno",
        "dateEntry": ""
      },
      {
        "id": "03",
        "name": "Sandwich de Jamón y Queso",
        "price": 10,
        "image": "",
        "type": "desayuno",
        "dateEntry": ""
      },
      {
        "id": "04",
        "name": "Jugo de Frutas Natural",
        "price": 7,
        "image": "",
        "type": "desayuno",
        "dateEntry": ""
      },
      {
        "id": "05",
        "name": "Hamburguesa Simple",
        "price": 10,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "06",
        "name": "Hamburguesa Doble",
        "price": 15,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "07",
        "name": "Papas Fritas",
        "price": 5,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "08",
        "name": "Aros de Cebolla",
        "price": 5,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "09",
        "name": "Agua 500 ml",
        "price": 5,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "10",
        "name": "Agua 750 ml",
        "price": 7,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "11",
        "name": "Gaseosa 500 ml",
        "price": 7,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      },
      {
        "id": "12",
        "name": "Gaseosa 750 ml",
        "price": 10,
        "image": "",
        "type": "comida",
        "dateEntry": ""
      }
]

const Products = () => {
    const [db, setDb] = useState (initialDb);
    const [dataToEdit, setDataToEdit] = useState(undefined);

    const createData = (data) => {
      data.id = Date.now();
      // console.log(data)
      setDb([...db, data])
    };

    const updateData = (data) => {
      let newData = db.map(el => el.id === data.id ? data:el);
      setDb(newData);
    };

    const deleteData = (id) => {
      let isDelete = window.confirm(
        `¿Estás seguro de eliminar el producto con el id '${id}'?`
      );
      if(isDelete){
        let newData = db.filter(el => el.id !== id);
        setDb(newData);
      } else {
        return;
      }
    };

    return (
        <div>
            <h1> Productos </h1>
            <Form 
             createData={createData} 
             updateData={updateData} 
             dataToEdit={dataToEdit} 
             setDataToEdit={setDataToEdit} 
            />
            <Table 
             data={db} 
             setDataToEdit={setDataToEdit}
             deleteData={deleteData} 
            />
        </div>
    );
};

export default Products;