import React from 'react'
import { useEffect } from 'react'

const Services = () => {
    useEffect(()=>{
        console.log('Services component mounted/created')
        return ()=>{
            console.log('Services component unmounted/deleted')
        }
    })
  return (
    <div>Services</div>
  )
}

export default Services