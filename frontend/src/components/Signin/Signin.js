import React, {useState} from 'react'
import signIn from "../../logic/auth.logic";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux/reducers/userReducer";
import {useNavigate} from "react-router-dom";

const Signin = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  // const username = useSelector(state => state.user.username)
  // const password = useSelector(state => state.user.username)
  const navigate = useNavigate()

  const handleLoginChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    signIn(username, password)
      .then(r => {
        dispatch(setUser(r.username, r.accessToken))
        navigate('/Items', {replace: true})
      }
    )
  }

  return (
    <div className="container center" >
      <h4>Sign in</h4>
      <form className="col s4" id="signin" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input id="username" name="username" type="text" className="validate" required
                   value={username}
                   onChange={handleLoginChange}/>
            <label htmlFor="username">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4 offset-s4">
            <input className="validate" type="password" id="password" name="password" required
                   value={password}
                   onChange={handlePasswordChange}/>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light">
          <span>submit</span>
        </button>
      </form>
    </div>
  )
}
export default Signin;
