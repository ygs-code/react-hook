// 自定义hook
 // initialValue默认输入 自定义 hook
function useBind(initialValue) {
    const [value, setValue] = React.useState(initialValue || "");
    const onChange = e => {
      setValue(e.target.value);
    };
    return { value, onChange };
  }



  // 用法
  function InputBind(props) {
    // 获取 hook
    const inputProps = useBind(props.initialValue);
    return (
      <div>
        <p>useBind实现 value:{inputProps.value}</p>
        <input {...inputProps} />
      </div>
    );
  }



 
const App = (props) => {
    return (
        <div>
            <InputBind
                initialValue="init"
                onChange={(val) => {
                    console.log('HocInput', val);
                }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('example'));
