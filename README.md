# react-fast-highlighter [![CircleCI](https://circleci.com/gh/ethanyanjiali/react-fast-highlighter.svg?style=svg)](https://circleci.com/gh/ethanyanjiali/react-fast-highlighter)
> A performant react component to highlight fragement of text

[中文文档](https://github.com/ethanyanjiali/react-fast-highlighter/blob/master/README.zh.md)

## Demo

[![Edit 01j8o25l9l](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/01j8o25l9l)

## Get Started
Under the root folder of you project
```
npm i -S react-fast-highlighter
```
In your code where you want to highlight words in a piece of text
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
The highlighted part would be wrapped in a `mark` tag, with `highlighted` classname.
You can customize the highlight style by adding some CSS:
```css
.highlighted {
  background-color: red;
}
```

## Props
```javascript
{
    /**
    * The full text to display
    * @default ""
    */
    text: PropTypes.string,

    /**
    * The part of text that needs to be highlighted
    * @default ""
    */
    highlightText: PropTypes.string,

    /**
    * CSS class name applied to highlighted text
    * @default "highlighted"
    */
    highlightClassName: PropTypes.string,

    /**
    * Search should be case sensitive; defaults to false
    * @default false
    */
    caseSensitive: PropTypes.bool,

    /**
    * Type of tag to wrap around highlighted matches
    * @default mark
    */
    highlightTag: PropTypes.string,

    /**
    * Custom class name to use on outer span
    * @default NULL
    */
    className: PropTypes.string,
}
```

## Development

1. Make sure node > 6 and npm > 3
0. Install dependencies
    ```bash
    npm i
    ```
0. Strat Storybook
    ```
    npm run storybook
    ```
0. Go to `localhost:6006` to see the component

## Publish

The CI is configured to publish a patch version for every commit on master. However, if you need to publish manually:

Build it first
```
npm run build
```
Incement the version number
```
npm version minor
```
Then publish
```bash
npm publish
```


## Roadmap
1. Add benchmark for common highlighter libraries
2. Add support for highlighting multiple words
