import axios from "axios"
import React, { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import info from "../assets/info.png"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"

const Orderlist = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/productlist`
        )
        setProducts(response.data.products)
        console.log(response.data.products) // This will log the updated state
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="content ">
      <h1>Order List</h1>
      <Button variant="warning" onClick={handleShow} className="modalButton">
        Add Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>price</th>
            <th>serie number</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>{prod._id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}$</td>
              <td>{prod.serialcode}</td>

              <td>
                <img
                  onClick={() => navigate(`/orderlist/${prod._id}`)}
                  width="40px"
                  src={info}
                  alt="info"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding a Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter a name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter a price"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Series Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Series Number"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Orderlist
