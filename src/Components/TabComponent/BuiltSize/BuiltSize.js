import React from 'react'
import Roofing from './ChildComponent/Roofing'
import Siding from './ChildComponent/Siding'
import Storage from './ChildComponent/Storage'
import Guage from './ChildComponent/Guage'

const BuiltSize = () => {
  return (
    <div className={window.innerWidth > 992 ? 'tab-data-container' : 'tab-data-container mb-built-size-container'}>
      <Roofing />
      <Guage />
      <Siding />
      <Storage />
    </div>
  )
}

export default BuiltSize
