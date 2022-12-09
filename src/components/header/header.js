import { Link } from "react-router-dom"
import "./header.css"
import logo from "../../assets/logo.png"

export const Header = () => {
    return (
        <div className="header">
            <div className="imglogo">
                <img src={logo} />
            </div>
            <div className="left_header">
                <Link className="nav-link">
                    利用方法
                </Link>
                <Link className="nav-link">
                    プラン
                </Link><Link className="nav-link">
                    料金
                </Link><Link className="nav-link">
                    FAQ
                </Link><Link className="nav-link">
                    学校や学塾の方
                </Link>
                <button className="Button">
                    ログイン
                </button>
            </div>
        </div>
    )
}