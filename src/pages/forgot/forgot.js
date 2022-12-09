import { useCallback } from "react"
import { Header } from "../../components/header/header"
import { Link, useNavigate } from "react-router-dom"
import "./forgot.css"
export const Forgot = () => {
    const navigate = useNavigate();


    const handleClick = useCallback(() => {
        navigate("/forgotPassword")
    }, [])
    return (
        <div className="forgot">
            <Header></Header>
            <div className="forgot1">
                <a className="title1">パスワード再設定</a>
                <div>
                    <a className="title2">メールアドレス</a>
                    <input className="input1"></input>
                </div>
                <button className="button1" onClick={handleClick}>送信</button>
            </div>
        </div>
    )
}