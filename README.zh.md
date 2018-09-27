# react-fast-highlighter [![CircleCI](https://circleci.com/gh/ethanyanjiali/react-fast-highlighter.svg?style=svg)](https://circleci.com/gh/ethanyanjiali/react-fast-highlighter)
> React高性能文本高亮组件 

[English Document](https://github.com/ethanyanjiali/react-fast-highlighter/blob/master/README.md)

## 演示 

[![Edit 01j8o25l9l](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/01j8o25l9l)

## 使用方法
在项目根目录下，执行
```
npm i -S react-fast-highlighter
```
在需要高亮组件的地方（假设MyComponent是你目前拥有的组件）添加如下代码
```javascript
import Highlighter from 'react-fast-highlighter'

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <Highlighter
                    text="The first second was alright, but the second second was tough."
                    highlightText="second"
                />
            </div>
        )
    }
}
```
高亮部分将会置于`mark`标签内，并附有`highlighted`的类名。所以你可以根据自己需求为该类添加样式，例如：
```css
.highlighted {
  background-color: red;
}
```

## 属性
```javascript
{
    /**
    * 全部文本 
    * @default ""
    */
    text: PropTypes.string,

    /**
    * 需要高亮的文本 
    * @default ""
    */
    highlightText: PropTypes.string,

    /**
    * 高亮文本的类名
    * @default "highlighted"
    */
    highlightClassName: PropTypes.string,

    /**
    * 搜索高亮文本时是否考虑大小写
    * @default false
    */
    caseSensitive: PropTypes.bool,

    /**
    * 高亮文本所用的标签名
    * @default mark
    */
    highlightTag: PropTypes.string,

    /**
    * 置于全部文本外围标签的类名
    * @default NULL
    */
    className: PropTypes.string,
}
```

## 开发

1. 确保安装了node6以及npm5之上的版本
0. 安装依赖
    ```bash
    npm i
    ```
0. 启动Storybook进行调试
    ```
    npm run storybook
    ```
0. 你可以在`localhost:6006`看到组件

## 发布

该项目使用CI进行发布，如果需要手动发布：

预编译包裹
```
npm run build
```
递增版本号
```
npm version minor
```
发布至npm
```bash
npm publish
```

