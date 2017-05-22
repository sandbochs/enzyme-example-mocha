import assert from 'assert'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../src/app'
import Container from '../src/container'
import Loader from '../src/loader'
import Menu from '../src/menu'

describe('<Menu />', () => {
  it('renders the loader the app has not loaded', () => {
    const props = { actions: {}, loaded: false }
    const wrapper = shallow(<Container {...props} />)

    assert(wrapper.contains(<Loader />))
    assert(!wrapper.not(Loader).exists())
  })

  it('renders the menu and app if loaded', () => {
    const props = { actions: {}, loaded: true }
    const wrapper = shallow(<Container {...props} />)

    assert(wrapper.contains(<Menu {...props} />))
    assert(wrapper.contains(<App {...props} />))
  })
})
