import React, {  useState } from 'react';
import { useDispatch } from "react-redux";
import {createProduct} from '../../redux/actions/actions'
import axios from 'axios';


  const CreateProduct = (props) => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState({
        name: "",
        colors: "",
        width: "",
        height: "",
        deep: "",
        description: "",
        rate: "",
        count: "",
        price: "",
        category: ""
    });

    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false);
    

const uplooadImage = async (e) => {
  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);
  data.append("upload_preset", "proyecto");
  setLoading(true);

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dgbmueahi/upload",
      data
    );

    setImage(response.data.secure_url);
    console.log(response.data.secure_url);
    setLoading(false);
  } catch (error) {
    console.error("Error al subir la imagen: ", error);
    setLoading(false);
  }
};



    const handleInputs = (e) => {
      const { name, value } = e.target;
      setProductData({
        ...productData,
        [name]: value,
      });
    };


  const handleSubmit = (e) => {
      e.preventDefault();
    // Creas un objeto con la estructura esperada
    const formattedData = {
    name: productData.name,
    colors: [productData.colors],
    image:image,
    measures: {
      width: productData.width,
      height: productData.height,
      deep: productData.deep,
    },
    description: productData.description,
    rating: {
      rate: Number(productData.rate),
      count: Number(productData.count),
    },
    price: Number(productData.price),
    category: [productData.category],
  };

  // Llamas a la acción de Redux pasando el objeto formateado
  dispatch(createProduct(formattedData));
};

      

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data' action='/product/create' method='POST' >
            <label htmlFor="name">Nombre del producto</label>
            <input type="text" value={productData.name} name="name" onChange={handleInputs} />

            <br />

            <label htmlFor="colors">Colores (separados por coma)</label>
            <input type="text" value={productData.colors} name="colors" onChange={handleInputs} />
            
            <br/>
            
            <label htmlFor="image">imagen</label>
            <input type="file"  name="image" onChange={uplooadImage} />

            <br/>

            <label htmlFor="width">width</label>
            <input type="text" value={productData.width} name="width" onChange={handleInputs} />

            <br/>

            <label htmlFor="height">height</label>
            <input type="text" value={productData.height} name="height" onChange={handleInputs} />

            <br/>

            <label htmlFor="deep">deep</label>
            <input type="text" value={productData.deep} name='deep' onChange={handleInputs}/>

            <br/>

            <label htmlFor="description">description</label>
            <input type="text" value={productData.description} name='description' onChange={handleInputs} />

            <br/>

            <label htmlFor="rate">rate</label>
            <input type="text" value={productData.rate} name='rate' onChange={handleInputs}/>

            <br/>

            <label htmlFor="count">count</label>
            <input type="text" value={productData.count} name='count' onChange={handleInputs}/>

            <br/>

            <label htmlFor="price">price</label>
            <input type="text" value={productData.price} name='price' onChange={handleInputs}/>

            <br/>

            <label htmlFor="category">category</label>
            <input type="text" value={productData.category} name='category' onChange={handleInputs} />
            <br/>
            <button type="submit">Guardar Producto</button>
        </form>
    );
};


export default CreateProduct

// const uplooadImage = async (e) =>{
//   const files = e.target.files;
//   const data = new FormData();
//   data.append("file",files[0]);
//   data.append("upload_preset","proyecto");
//   setLoading(true);
//   const res = await fetch (
//     "https://api.cloudinary.com/v1_1/dgbmueahi/upload",
//     {
//       method:"POST",
//       body: data,
//     }
//   )
//   const file = await res.json();
//   //console.log(res);
//   setImage(file.secure_url)
//   console.log(file.secure_url);
//   setLoading(false)
// }