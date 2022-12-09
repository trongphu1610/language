import { useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login_form.css"
export const LoginForm = () => {
    return (
        <div className="loginform">
            <a className="title1">ログイン</a>
            <div className="loginform1">
                <div className="tinput1">
                    <a className="title2">メールアドレス</a>
                    <input className="input1"></input></div>
                <div>
                    <a className="title2">パスワード</a>
                    <input className="input1"></input>
                </div>
            </div>
            <Link className="title3" to={"/forgot"}>パスワードを忘れた方はこちら</Link>
            <div>
                <button className="button1">
                    ログイン
                </button>
            </div>
            <Link className="title4" to={"/"}>アカウントをお持ちでない方：新規登録はこちら</Link>
        </div>
    )
}