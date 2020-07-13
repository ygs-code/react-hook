// 创建Context
const TestContext = React.createContext({});
const Navbar = () => {
    // 获取Context 的值
    const { username } = React.useContext(TestContext);

    return (
        <div className="navbar">
            <p>{username}</p>
        </div>
    );
};

const Messages = () => {
     // 获取Context 的值
    const { username } = React.useContext(TestContext);
    console.log('username=')

    return (
        <div className="messages">
            <p>1 message for {username}</p>
        </div>
    );
};

function App() {
    return (
        <TestContext.Provider  value={{
			username: 'superawesome',
		}}>
            <div className="test">
                <Navbar />
                <Messages />
            </div>
        </TestContext.Provider>
    );
}
 
ReactDOM.render(<App />, document.getElementById('example'));