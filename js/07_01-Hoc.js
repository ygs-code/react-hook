// 🐤 Render Props写法
// props 两个参数initialValue 输入，onChange输出
class HocBind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             // 获取初始化值
            value: props.initialValue,
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
        return (
            <div>
                {/* 这样children 可以传递参数啦 */}
                {this.props.children({
                    value: this.state.value,
                    onChange: this.onChange.bind(this),
                })}
            </div>
        )
    }
}

const App = (props) => {
    return (
        <div>
            <HocBind
                initialValue="init"
                onChange={(val) => {
                    console.log('HocBind', val);
                }}
            >
                {
                //  这是一个函数接受props
                (props) => (
                    <div>
                        <p>  Render Props HocBind实现 value:{props.value}</p>
                        <input placeholder="input" {...props} />
                    </div>
                )}
            </HocBind>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('example'));
