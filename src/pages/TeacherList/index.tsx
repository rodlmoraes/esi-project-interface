import React from 'react'
import { PAGE_NAME } from '../../constants'
import RecipeReviewCard from '../../components/cards'

export default function TeacherList() {
  return (
    <>
      <h1>{PAGE_NAME}</h1>
      {[1, 2, 3, 4].map(key => {
        return <RecipeReviewCard key={key} />
      })}
    </>
  )
}
