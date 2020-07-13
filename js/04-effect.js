//  清除 effect
const Count = () => {
    let [count, setCount] = React.useState(0);
    // 因为 这里 没有 跨渲染周期 所以能使用一个变量
    let timer = null;

    // 添加到一个队列中 react hooks 中如何模拟 componentDidMount
    // 在 useEffect，把第二个参数即依赖的状态，设置为 []
    React.useEffect(() => {
        console.log('componentDidMount');
        timer = setInterval(() => {
            // 异步更新 state 但是要自己累加
            //  setCount(count+1)
            //   count=count+1

            // 同步更新 state
            setCount((count) => count + 1);
        }, 1000);
        return () => {
            console.log('componentWillUnmount()');
            clearInterval(timer);
        };
    }, []);

    // 监听 count 变化
    // 当count 变化的时候 componentDidMount和componentDidUpdate: 都会调用useEffect
    React.useEffect(() => {
        console.log('count=', count);
    }, [count]);

    // 当所有的state 改变的时候  componentDidMount和componentDidUpdate: 都会调用useEffect
    // 因为第二个参数不传任何数据
    React.useEffect(() => {
        console.log('useEffect All');
    });

    return (
        <div>
            <p>You clicked count={count} times</p>
        </div>
    );
};

function Example() {
    let [flag, setflag] = React.useState(true);
    return (
        <div>
            {flag ? <Count></Count> : null}

            <button
                onClick={() => {
                    setflag(false);
                }}
            >
                Click clearInterval
            </button>
        </div>
    );
}
ReactDOM.render(<Example />, document.getElementById('example'));
