import AuthenticationButton from "./AuthenticationButton";

const LoginPage = (props) => {
    return(
        <div style= {{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <AuthenticationButton />
        </div>
    )
}

export default LoginPage;