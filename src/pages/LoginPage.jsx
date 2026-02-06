import React from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import {loginUser} from '../../api'

function LoginPage() {

const [form, setForm] = React.useState({
    email : "",
    password: "",
})  
const [status, setStatus] = React.useState("idle")  
const [error, setError] = React.useState(null)

const location = useLocation()
console.log(location)
const navigate = useNavigate()
const fromLocation = location.state?.from || "/host";

function handleChange(event) {
    const {name, value} = event.target
    setForm(prevForm => ({...prevForm,
            [name] : value
    }))
}
function handleSubmit(event) {
    setError(null)
    event.preventDefault()
    async function login() {
        setStatus("submitting")
        try {
            const data = await loginUser(form)
            localStorage.setItem("loggedin", true)
            navigate(fromLocation, {replace: true})
        }
        catch(err) {
            setError(err)
        }
        finally {
            setStatus("idle")
        }
    }
    login()
}

  return (
    <div className="login-container">
        {location.state?.message &&  <h1>{location.state.message}</h1>}
        <h1>Sign in to your account</h1>
        {error && <h1>{error.message}</h1>}
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email address"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e)}
                />
            <input 
                type="password"
                placeholder="Password"
                name="password"
                value={form.password} 
                onChange={(e) => handleChange(e)}/>
            <button disabled={status === 'submitting'}>{status === 'submitting' ? "Logging In..." : "Log in"}</button>
        </form>
    </div>
  )
}

export default LoginPage
