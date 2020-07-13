/*
useCallback把匿名回调“存”起来
在之前版本的文档和大牛的blog中都有提到避免在component render时候声明匿名方法，
因为这些匿名方法会被反复重新声明而无法被多次利用，
然后容易造成component反复不必要的渲染。



*/


class MyComponent extends React.Component {
  constructor(props) {
      super(props);
      this.clickCallback = this.clickCallback.bind(this);
  }
  clickCallback() {
      // ...
  }
  render() {

      return <button onClick={()=>{

      }}>Click Me!</button>; // 在component render时候声明匿名方法
      return <button onClick={this.clickCallback}>Click Me!</button>;
  }
}


function CountComponent(props) {
  const [count,setCount]= React.useState(0)
  const [count1,setCount1]= React.useState(0)
  // 把函数存起来
  const clickCallback = React.useCallback(() => {
    //获取更新
     setCount(count=>count+1)
    //  setCount(count=>count+1)
  }, [count1]);
return <button onClick={clickCallback}>Click Me! count={count}</button>;
}



 
 
 
ReactDOM.render(<CountComponent />, document.getElementById('example'));
