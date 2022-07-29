//QUestion: what is the point of adding a shared contex

function Products(){
    const ctx = React.useUserContext(UserContext);
    //add random string
    ctx.users.push(Math.random().toString(36).substr(2, 5));
    return (
        <div>
            <h3>Products Component</h3>
            {JSON.stringify(ctx.users)}
            <p>List of the the product we make</p>
        </div>
    );
}