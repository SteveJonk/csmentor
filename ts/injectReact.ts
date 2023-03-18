import React, { ComponentClass, FunctionComponent } from 'react'
import ReactDOM from 'react-dom/client'

type ComponentType = string | FunctionComponent<{}> | ComponentClass<{}, any>

export const injectReact = (Component: ComponentType, selector: string) => {
  const element = React.createElement
  const domContainer = document.querySelector(selector)
  if (domContainer) {
    const root = ReactDOM.createRoot(domContainer)
    root.render(element(Component))
  }
}
