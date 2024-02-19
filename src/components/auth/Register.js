import React from "react"
import { useDispatch } from "react-redux"
import { RegisterUser } from "../../redux/actiontype"
import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Register = () => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const signup = () => {
    const data = { userName, email, password }
    dispatch(RegisterUser(data))
  }
  return (
    <div>
      <Form className='content'>
        <Form.Group className="mt-8 " controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="***"
          />
        </Form.Group>
        <Button onClick={() => signup()} variant="primary">
          Primary
        </Button>
      </Form>
    </div>
  )
}

export default Register
