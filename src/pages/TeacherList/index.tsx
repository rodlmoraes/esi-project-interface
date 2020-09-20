import React from 'react'
import { PAGE_NAME } from '../../constants'
import OutlinedButtons from '../../components/buttons'
import RecipeReviewCard from '../../components/cards'

export default function TeacherList() {
  

  return (
    <>
      <h1>{PAGE_NAME}</h1>
      <OutlinedButtons/>
      {[1, 2, 3, 4].map(() => {
        return <RecipeReviewCard/>
      })}
    </>
  )
}
