import React from 'react'
import { render } from 'react-dom'

import Bootstrap from './bootstrap'

const root = document.getElementById('root')

render(
  <Bootstrap />,
  root,
  () => console.log('Ready!!!')
)