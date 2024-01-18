import oldManData from './wiseoldman'
import { useState } from 'react'
import Image from 'next/image'

export default function isLastCompRunning (){
  const [compBool, setCompBool] = useState()
  const [skill, setSkill] = useState('')

  

  oldManData.then((res) => {
    const competitionDate = Date.parse(res.data[0].endsAt)
    if (competitionDate > Date.now()) {
      setCompBool(true)
      console.log(res.data[0])
    } else {
      setCompBool(false)
    }
  })

  return (
    <div>
      {compBool ? (
        <div>
          <Image src={`https://www.wiseoldman.net/_next/image?url=%2Fimg%2Fmetrics%2F${skill}.png&w=32&q=75`}/>
        </div>
      ):(
        <div></div>
      )}
    </div>
  )
}