import React,{useState} from 'react'
import { toast } from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    const { name, email, password, password2 } = formData;
    const navigate = useNavigate();


  

    const handelSubmit = (e) => {
        e.preventDefault()

        if (!password || !email) {
            toast.error('Please provide value into each input field');
        } else {

            axios
                .post("http://localhost:5000/api/users", { password, email, name })
                .then((response) => {
                    setFormData({ password: "", email: "", name: "", password2: "" })
                    console.log(response.data)
                    if (response.data) {
                        toast.success(`User :  added in Successfully`);
                        setTimeout((e) => navigate('/users'), 500);
                      


                    } else {
                        toast.error(response.data);
                        setTimeout((e) => navigate('/'), 500);
                    }
                })
                .catch(err => { toast.error(err.response.data) })

        }

       
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>

            <button type="button" className="btn btn-light ms-2" data-mdb-ripple-color="dark"
                data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-plus ms-1'></span> Sign up
            </button>


            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign in to Vape it</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger btn-rounded w-100 mb-4" >
                                <span className='fa fa-google me-2'></span>Sign up in with Google
                            </button>
                            <button className="btn btn-primary btn-rounded w-100 mb-4">
                                <span className='fa fa-facebook me-2'></span>Sign up with Facebook
                            </button>
                            {/* Form start */}

                            <form onSubmit={(e) => handelSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        name='name'
                                        value={name}
                                        className="form-control"
                                        id="name"
                                        placeholder='Enter your name'
                                        onChange={(e) => handleInputChange(e)}
                                    />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input
                                        type='email'
                                        className='form-control'
                                        id='email'
                                        name='email'
                                        value={email}
                                        placeholder='Enter your email'
                                        aria-describedby="emailHelp"
                                        onChange={(e) => handleInputChange(e)}
                                    />

                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password'
                                        name='password'
                                        value={password}
                                        placeholder='Enter password'
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                    <input
                                        type='password'
                                        className='form-control'
                                        id='password2'
                                        name='password2'
                                        value={password2}
                                        placeholder='Confirm password'
                                        onChange={(e) => handleInputChange(e)}
                                    />
                                </div>
                                <div className="form-check d-flex justify-content-center mb-5">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                    I agree all statements in <a href="#!">Terms of service</a>
                                    </label>
                                </div>
                                <button data-bs-dismiss="modal"  type="submit" className="btn btn-dark w-100 mt-5" >Sign Up</button>
                            </form>
                            {/* Form end */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
