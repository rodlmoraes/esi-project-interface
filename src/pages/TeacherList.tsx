import React from 'react'
import { PAGE_NAME } from '../constants'
import NestedGrid from '../components/Grid'

export default function TeacherList() {
  return (
    <>
      <h1>{PAGE_NAME}</h1>
      <NestedGrid />
    </>
  )
}
