import Highlight, { defaultProps } from 'prism-react-renderer'
import React from 'react'

const Code: React.FC<any> = ({ children, className }) => {
  const language = className.replace(/language-/, '')
  return (
    <Highlight
      {...defaultProps}
      // theme={theme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
