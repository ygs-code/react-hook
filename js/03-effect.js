   // 使用 effect 模拟 componentDidMount 和 componentDidUpdate
 const Count = (props) => {
  const {count:propsCount} = props
  const [count, setCount] = React.useState(0);
  // 监听 propsCount 变化
  // 当count 变化的时候 componentDidMount和componentDidUpdate: 都会调用useEffect
  React.useEffect(() => {
      console.log('count=', count);
      setCount((count)=>count+1)
  }, [propsCount]);

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
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  // 添加到一个队列中 react hooks 中如何模拟 componentDidMount
 // 在 useEffect，把第二个参数即依赖的状态，设置为 []
  React.useEffect(() => {
    console.log('componentDidMount')
  }, [])


 // 监听 count1 变化
 // 当count1 变化的时候 componentDidMount和componentDidUpdate: 都会调用useEffect 
  React.useEffect(() => {
    console.log('count1=',count1)
  }, [count1])




  React.useEffect(() => {
    console.log('count2=',count2)
  }, [count2])

 
  // 当所有的state 改变的时候  componentDidMount和componentDidUpdate: 都会调用useEffect
  // 因为第二个参数不传任何数据
  React.useEffect(() => {
      console.log('useEffect All')
  });

  return (
    <div>
      <p>You clicked count1={count1} times</p>
      <button onClick={() => setCount1(count1 + 1)}>
        Click count1
      </button>
      <p>You clicked count2={count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click count2
      </button>
      Count 组件:<Count count={count1} />
    </div>
  );
}
  ReactDOM.render(<Example />, document.getElementById("example"));
  