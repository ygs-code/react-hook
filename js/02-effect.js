// 使用 Effect Hook
function Example() {
    const [count, setCount] = React.useState(0);

    // componentDidMount和componentDidUpdate: 都会调用useEffect
    React.useEffect(() => {
        //使用浏览器API更新文档标题   count 就是 state中的count
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}
ReactDOM.render(<Example />, document.getElementById('example'));
