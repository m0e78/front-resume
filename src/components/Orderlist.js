import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import info from '../assets/info.png'
import { useNavigate } from 'react-router-dom';
const Orderlist = () => {
    const [products,setProducts]=useState([])
  const  navigate=useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                setProducts(response.data);
                console.log(response.data); // This will log the updated state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
   
  return (
        <div className='content '>
            <h1>Order List</h1>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>title</th>
                      <th>price</th>
                      <th>category</th>
                      <th>action</th>
                  </tr>
              </thead>
              <tbody>

              {products.map((prod) => (
                  <tr key={prod.id}>
                      <td>{prod.id}</td>
                      <td>{prod.title}</td>
                      <td>{prod.price}$</td>
                      <td>{prod.category}</td>

                      <td><img onClick={()=>navigate(`/orderlist/${prod.id}`)} width='40px' src={info} alt="info" /></td>
                  </tr>
              ))}
                  </tbody>

             
          </Table>
          
    </div>
  )
}

export default Orderlist