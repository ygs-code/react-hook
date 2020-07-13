/*
在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，
但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），
这些属性是应用程序中许多组件都需要的。
Context 提供了一种在组件之间共享此类值的方式，
而不必显式地通过组件树的逐层传递 props。
*/

const TestContext = React.createContext({});

const ThemeContext = React.createContext({
    theme: 'red',
    toggleTheme: () => {},
});

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let { theme } = this.context;
        console.log('props=', props);
        console.log('this.context=', this.context);
        console.log('theme=', theme);
        return (
            <div {...props} style={{ background: theme }}>
                123213
            </div>
        );
    }
}
// 注入 context
ThemedButton.contextType = ThemeContext;

function App() {
    return (
        <ThemeContext.Provider
            value={{
                theme: 'red',
            }}
        >
            <ThemedButton></ThemedButton>
        </ThemeContext.Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('example'));
