// 使用  useRef 获取真实dom
function Example() {
    const [count, setCount] = React.useState(0);
    const couterRef = React.useRef();
    React.useEffect(() => {
        console.log(couterRef.current);
    }, [count]);
    return (
        <div>
            <p ref={couterRef}>You clicked count={count} times</p>
            <button onClick={() => setCount(count + 1)}>Click count</button>
        </div>
    );
}
ReactDOM.render(<Example />, document.getElementById('example'));
