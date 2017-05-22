import React from 'react'

import App from './app'
import Loader from './loader'
import Menu from './menu'

export default (props) => {
  const {
    actions: { helpMe, search },
    loaded
  } = props

  return !loaded
    ? <Loader />
    : (
      <div className='container'>
        <Menu {...props} />
        <App {...props} />
      </div>
    )
}
