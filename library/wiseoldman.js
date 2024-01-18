import axios from "axios";

// const oldManData = 

const oldManData = async (param) => {
  const value = await axios.get(`https://api.wiseoldman.net/v2/groups/651/${param}`)
  return value
}

// const oldManData = axios.get(`https://api.wiseoldman.net/v2/groups/651/competitions`)

export function oldMan(){
  oldManData('competitions')
  .then((res) => {
    const endingDate = Date.parse(res.data[0].endsAt)
    const currentDate = Date.now()
    if (endingDate > currentDate){
      return true
    } else {
      return false
    }
  })
}


// const isLastCompRunning = () => {
//   oldManData.then((res) => {
//     const competitionDate = Date.parse(res.data[0].endsAt)
//     if (competitionDate > Date.now()) {
//       return true
//     } else {
//       return false
//     }
//   })
// }

// isLastCompRunning()

// const mostRecentComp = () => {
//   oldManData.then((res) => console.log(res.data[0]))
// }

// mostRecentComp()

// export function recentComp(){
//   axios.get(`https://api.wiseoldman.net/v2/groups/651/competitions`)
//     .then((res) => {
//       const competitionDate = Date.parse(res.data[0].endsAt)
//       if (competitionDate > Date.now()) {
//         console.log(`The current competition is `)
//       } else {
//         console.log("testing1")
//       }
//     })
// } 

export default oldManData;