import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const PartsComponent = parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ))

  return <>{PartsComponent}</>
}

export default Content
