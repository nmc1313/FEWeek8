function Home(){
    const ctx = React.useUserContext(UserContext);

    return (
        <div>
            <h3>Home Component</h3>
            {JSON.stringify(ctx.users)}
            <p>Welcome to the site - happy to see you</p>
        </div>
    );
}