function SignOut() {
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <>
            <button onClick={logout}>Logout</button>
        </>
    )
}

export default SignOut;