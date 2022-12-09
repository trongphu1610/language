import { useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Header } from "../components/header/header";
import { RegisterForm } from "../components/register_form/register_form";

export const HomePage = () => {

    const navigate = useNavigate();


    const handleClick = useCallback(() => {
        navigate("/login")
    }, [])

    return (
        <div className="home">
            <Header></Header>
            <RegisterForm></RegisterForm>
            {/* home

            <Link to={"/login"}>login</Link>

            <button onClick={handleClick}>
                Button login
            </button> */}
        </div>
    )
}