/*
使用useRef来跨越渲染周期存储数据

在一个组件中有什么东西可以跨渲染周期，
也就是在组件被多次渲染之后依旧不变的属性？
第一个想到的应该是state。没错，
一个组件的state可以在多次渲染之后依旧不变。但是，
state的问题在于一旦修改了它就会造成组件的重新渲染。

那么这个时候就可以使用useRef来跨越渲染周期存储数据，
而且对它修改也不会引起组件渲染。

*/
function Example(props) {
    const [count, setCount] = React.useState(0);
    const [flag, setFlag] = React.useState(false);
    const timerID = React.useRef();
    // 如果是换成 timer 变量是不行的 因为 每次 render 的时候会重新声明 timer
    let timer = null;
    //
    React.useEffect(() => {
        // timer= setInterval(()=>{
        timerID.current = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    React.useEffect(() => {
        if (count > 10) {
            // clearInterval(timer);
            clearInterval(timerID.current);
        }
    });
    React.useEffect(() => {
        if (flag) {
            // clearInterval(timer);
            clearInterval(timerID.current);
        }
    }, [flag]);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Count: {count}
            </button>
            <button
               style={{
                 margin:"20px"
               }}
                onClick={() => {
                    setFlag(true);
                }}
            >
                Click clearInterval
            </button>
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById('example'));
