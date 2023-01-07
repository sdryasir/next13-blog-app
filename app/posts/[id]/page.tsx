import React from 'react'

function Page({params}:any):JSX.Element {
    const {id} = params;
    
  return (
    <div>{id}</div>
  )
}

export default Page