import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Logo from '../../assets/logo.png'

export const Login = ({ setName, setSurname, name, surname }) => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name === '' || name !== "username" && surname === '' || surname !== "123456") {
            toast.error('Invalid name or password')
        } else {
            navigate('/products', { replace: true })
            toast.success("You logged in")
            localStorage.setItem('name', name)
            localStorage.setItem('surname', surname)
        }
    }

    return (
        <div>
            <div className='form_container' />
            <form onSubmit={handleSubmit} className="form">
                <img src={Logo} width="100px" />
                <h1 className='login'>Login</h1>
                <input placeholder='Name...' type="text" onChange={e => setName(e.target.value)} />
                <input placeholder='Password...' type="password" onChange={e => setSurname(e.target.value)} />
                <button className='sbm_btn' type="submit">Login</button>
            </form>
        </div>
    )
}
