import { useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./register_form.css"
export const RegisterForm = () => {
    const navigate = useNavigate();


    const handleClick = useCallback(() => {
        navigate("/login")
    }, [])
    return (
        <div className="register">
            <a className="title">新規登録</a>
            <div className="register_body">
                <div className="body1">
                    <div className="body2">
                        <a className="title_register">姓（漢字）</a>
                        <input className="input_register"></input>
                    </div>
                    <div className="body2" placeholder="入力してください">
                        <a className="title_register">名（漢字）</a>
                        <input className="input_register"></input>
                    </div>
                </div>
                <div className="body1">
                    <div className="body2">
                        <a className="title_register">メールアドレス</a>
                        <input className="input_register"></input>
                    </div>
                    <div className="body2">
                        <a className="title_register">パスワード</a>
                        <input className="input_register"></input>
                    </div>
                </div>
                <div className="body1">
                    <div className="body2">
                        <a className="title_register">学校名（任意）</a>
                        <input className="input_register"></input>
                    </div>
                    <div className="body2">
                        <a className="title_register">学年（任意）</a>
                        <input className="input_register"></input>
                    </div>

                </div>
                <div className="body3">
                    <button onClick={handleClick} className="buttonregister">
                        登録する
                    </button>

                </div>
                <Link className="forgot" to={"/login"}>アカウントをお持ちの方：ログインはこちら</Link>


            </div>
        </div>
    )
}