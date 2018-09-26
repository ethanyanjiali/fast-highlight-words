# react-fast-highlighter
> A performant react component to highlight fragement of text

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
                    highlighText="second"
                />
            </div>
        )
    }
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
    caseSensitive: PropTypes.string,

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
0. 

## Roadmap
1. Add benchmark for common highlighter libraries
2. Add support for highlighting multiple words
