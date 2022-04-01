import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
  const arr = course.parts.map((part) => part.exercises)
  console.log(arr)
  const total = arr.reduce((prev, curr) => prev + curr)
  console.log(total)
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  )
}

export default Course
