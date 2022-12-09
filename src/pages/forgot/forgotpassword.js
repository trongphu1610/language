import { useCallback } from "react"
import { Header } from "../../components/header/header"
import { Link, useNavigate } from "react-router-dom"
import "./forgotpassword.css"
export const ForgotPassword = () => {
    const navigate = useNavigate();


    const handleClick = useCallback(() => {
        navigate("/login")
    }, [])
    return (
        <div >
            <Header></Header>
            <div className="forgotpassword">
                <a className="title1">新しいパスワードを設定</a>
                <div>
                    <a className="title2">パスワード</a>
                    <input className="input1"></input>
                </div>
                <div>
                    <a className="title2">パスワード（確認）</a>
                    <input className="input1"></input>
                </div>
                <button className="button1" onClick={handleClick}>設定する</button>
            </div>
        </div>
    )
}