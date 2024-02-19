import { useNavigate } from 'react-router-dom'
import loginpng from '../../assets/login.png'
import { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useDispatch } from 'react-redux'
const Login = () => {
    const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
    const navigate=useNavigate()
  return (
<div>
      <Form className='content'>
       
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
        <Button  variant="primary">
          Primary
        </Button><br />
        <img src={loginpng} width="60px" alt="" /><br />
        <span onClick={()=>navigate('/register')}>Register if u dont have an account</span>
      </Form>
    </div>  )
}

export default Login