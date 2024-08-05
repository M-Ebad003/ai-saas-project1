// import React from 'react'
// import Header from '../../../../../components/shared/Header'
// import { SearchParamProps, TransformationTypeKey } from '../../../../../types'
// import { transformationTypes } from '@/constant'
// import TransformationForm from '../../../../../components/shared/TransformationForm'
// import { auth } from '@clerk/nextjs/server'
// import { getUserByID } from '@/lib/actions/user.action'
// import { redirect } from 'next/navigation'


// const AddTransformationType = async ({params:{type}}:SearchParamProps) =>{
//   const {userId}=auth();
//   const transformation=transformationTypes[type];
//   if(!userId) redirect('/sign-in');
//   const user=await getUserByID(userId)
//   console.log(user) 
//   return (
//     <>
//     <Header title={transformation.title} subTitle={transformation.subTitle}/>
//     <TransformationForm action="Add" userId={user._id} type={transformation.type as TransformationTypeKey} creditBalance={user.creditBalance}/>
//     </>
//   )
// }

// export default AddTransformationType
import React from 'react'

const AddTransformationType = () => {
  return (
    <div>AddTransformationType</div>
  )
}

export default AddTransformationType