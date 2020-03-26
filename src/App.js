import React from 'react'

import Header from './components/Header'
import Content from './components/Content'
import Controls from './containers/Controls'

// Omitting a global state management for simplicity.
// Can add one, but would need to see what the rest of the application contains
function App() {
  return (
    <div>
      <Header />
      <Content>
        {/* Tiny router for demo */}
        {{
          '/': <Controls />
        }[window.location.pathname] || <div>404 - not found</div>}
      </Content>
    </div>
  )
}

export default App
