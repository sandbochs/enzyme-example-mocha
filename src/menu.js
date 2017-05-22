import React from 'react'

export default (props) => {
  const {
    actions: { helpMe, search }
  } = props

  return (
    <div className='menu'>
      <a href='/home'>Home</a>
      <a href='/browse'>Browse</a>
      <a onClick={helpMe}>Help</a>
      <input onChange={search} placeholder='search...' />
    </div>
  )
}
