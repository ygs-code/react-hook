// HOC写法 当然这种方法可以使用装饰器注入
const HocBind = (WrapperComponent) => {
    return class extends React.Component {
        constructor(props){
          super(props)
          this.state = {
            // 获取初始化值
            value: this.props.initialValue,
        };
        }
      
        onChange(e) {
             //  事件改变值回调
            this.setState({ value: e.target.value });
            if (this.props.onChange) {
                this.props.onChange(e.target.value);
            }
        }
        render() {
            const newProps = {
                value: this.state.value,
                onChange: this.onChange.bind(this),
            };
            return <WrapperComponent {...newProps} />;
        }
    };
};
// 用法 最外层组件
const Input = (props) => (
    <div>
        <p>HocBind实现 value:{props.value}</p>
        <input placeholder="input" {...props} />
    </div>
);

// 闭包
const HocInput = HocBind(Input);

const App = (props) => {
    return (
        <div>
            <HocInput
                initialValue="init"
                onChange={(val) => {
                    console.log('HocInput', val);
                }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('example'));
