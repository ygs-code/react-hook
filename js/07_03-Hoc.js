// 继承方式
class HocBind extends React.Component {
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
            return  (
                <div></div>
            )
        }
    };
 
 // 继承了 父组件的 方法 和 state   
  class  ExtendsBindInput extends  HocBind{
    render() {
        const newProps = {
            value: this.state.value,
            onChange: this.onChange.bind(this),
        };
        return  (
          <div>
            <p>继承方式 HocBind实现 value:{newProps.value}</p>
            <input placeholder="input" {...newProps} />
           </div>
        )
    }
  }


 
const App = (props) => {
    return (
        <div>
            <ExtendsBindInput
                initialValue="init"
                onChange={(val) => {
                    console.log('HocInput', val);
                }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('example'));
