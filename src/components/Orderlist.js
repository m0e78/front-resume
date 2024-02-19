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
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/productlist`
      )
      setProducts(response.data.products.reverse())
      console.log(response.data.products)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProduct(null) // Reset selected product after closing modal
  }

  const handleShowModal = (product = null) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleSubmit = async (productData) => {
    try {
      if (selectedProduct) {
        // If selectedProduct exists, it's an update operation
        await axios.patch(
          `http://localhost:4000/api/v1/productlist/${selectedProduct._id}`,
          productData
        )
      } else {
        // If selectedProduct doesn't exist, it's an add operation
        await axios.post(
          `http://localhost:4000/api/v1/productlist`,
          productData
        )
      }
      handleCloseModal()
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/productlist/${id}`)
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="content">
      <h1>Order List</h1>
      <Button
        variant="warning"
        onClick={() => handleShowModal()}
        className="modalButton">
        Add Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Series Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>{prod._id}</td>
              <td>{prod.name}</td>
              <td>{prod.price}$</td>
              <td>{prod.series_number}</td>
              <td>
                <img
                  onClick={() => navigate(`/orderlist/${prod._id}`)}
                  width="40px"
                  src={info}
                  alt="info"
                />
                <Button
                  variant="primary"
                  className="mx-2"
                  onClick={() => handleShowModal(prod)}>
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(prod._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedProduct ? "Update Product" : "Add Product"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const productData = Object.fromEntries(formData.entries())
              handleSubmit(productData)
            }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a name"
                defaultValue={selectedProduct ? selectedProduct.name : ""}
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter a price"
                defaultValue={selectedProduct ? selectedProduct.price : ""}
                name="price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSeriesNumber">
              <Form.Label>Series Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter a series number"
                defaultValue={
                  selectedProduct ? selectedProduct.series_number : ""
                }
                name="series_number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSeriesNumber">

            <Form.Control type="file" />
            </Form.Group>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              {selectedProduct ? "Update" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Orderlist
