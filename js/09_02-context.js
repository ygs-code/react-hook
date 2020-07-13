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

function ThemeTogglerButton() {
    const [color, setColor] = React.useState('yellow');
    const callbackSetColor = React.useCallback(
        (value) => {
            console.log('value=', value);
            setColor(value);
        },
        [color]
    );

    const clickCallbackEmpty = React.useCallback(() => {
        callbackSetColor('yellow');
    }, [callbackSetColor]);

    // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
    console.log('color=', color);
    return (
        <ThemeContext.Consumer
            // 动态传参无效
            valeu={{
                theme: color,
                toggleTheme: () => {},
            }}
        >
            {/* 以回调组件方式渲染 */}
            {({ theme, toggleTheme }) => {
                return (
                    <div
                        onClick={clickCallbackEmpty}
                        style={{ backgroundColor: theme }}
                    >
                        Toggle Theme
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}

function App() {
    const [color, setColor] = React.useState('red');
    const callbackSetColor = React.useCallback(
        (value) => {
            console.log('value=', value);
            setColor(value);
        },
        [color]
    );

    const clickCallbackEmpty = React.useCallback(() => {
        callbackSetColor('yellow');
    }, [callbackSetColor]);

    return (
        <div>
            {/* 只有 Provider 才能东塔传参*/}
            <ThemeContext.Provider
                value={{
                    theme: color,
                }}
            >
                <ThemedButton onClick={clickCallbackEmpty}></ThemedButton>
            </ThemeContext.Provider>

            <ThemeTogglerButton></ThemeTogglerButton>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('example'));
