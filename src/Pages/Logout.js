import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout({ onLogoutSucceed }) {
    const navigate = useNavigate()
    onLogoutSucceed()
    navigate('/')
}