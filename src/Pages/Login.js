import { useNavigate } from "react-router-dom"
import { getUserByUsernameAndPassword } from "../Services/userApi"

export default function Login({ onLoginSucceed }) {
    const navigate = useNavigate()
    function loginHandler(event) {
        event.preventDefault()

        const { username, password } = Object.fromEntries(new FormData(event.target))

        const user = getUserByUsernameAndPassword(username, password)
        if(user){
            onLoginSucceed(user)
            navigate('/')
        }
    }

    return (
        <form onSubmit={loginHandler}>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username"/>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password"/>

            <input type="submit" value="Login"/>
        </form>
    )
}