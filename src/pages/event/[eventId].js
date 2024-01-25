import Head from 'next/head';
import Image from 'next/image';

import allMetrics from '../../../library/metricsData'
import PolarBear from '../../../library/PolarBear'
import { iconLinkGetter } from '../../../library/getIcon';

export default function Event({eventData}) {

  const eventStartDate = eventData.startsAt
  const eventEndDate = eventData.endsAt
  const currentDate = Date.now()

  const firstPlace = eventData.participations[0]
  const secondPlace = eventData.participations[1]
  const thirdPlace = eventData.participations[2]

  // This is what I need but I don't know how to get the value out of the function instead of `Promise <pending>`

  // const userEventData = async (player) => {
  //   const user = await fetch(`https://api.wiseoldman.net/v2/players/${player.player.username}/gained?startDate=${eventStartDate}&endDate=${eventEndDate}`)
  //     .then(response => response.json())
  //     .then(data => data)
    
  //   if (eventData.metric in user.data.skills){
  //     console.log(user.data)
  //   } else if (user.data.bosses.hasOwnProperty(eventData.metric)){
  //     return user.data.bosses[eventData.metric]
  //   } else if (user.data.activities.hasOwnProperty(eventData.metric)){
  //     return user.data.activities[eventData.metric]
  //   } else if (user.data.computed.hasOwnProperty(eventData.metric)){
  //     return user.data.computed[eventData.metric]
  //   }
  // }

  // userEventData(firstPlace)

  // console.log(userEventData(firstPlace, eventStartDate, eventEndDate))

  // console.log(eventData)

  const WinnerText = () => {
    if (currentDate < Date.parse(eventStartDate)){
      return (
        <p>The event will start soon</p>
      )
    } else if (currentDate < Date.parse(eventEndDate)){
      return (
        <div>
          <h2>Currently In The Lead</h2>
          <p>{firstPlace.player.username}</p>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Winner!</h2>
          <p>{firstPlace.player.username}</p>
        </div>
      )
    }
  }
  

  const xpOptions = {
    // responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Total ${eventData.metric} XP Gained`,
      },
      maintainAspectRatio: false
    },
  };
  
  const xpGained = {
    labels: [firstPlace.player.username, secondPlace.player.username, thirdPlace.player.username],
    datasets: [
      {
        label: `${eventData.metric} xp gained`,
        data: [firstPlace.progress.gained, secondPlace.progress.gained, thirdPlace.progress.gained],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgb(54, 162, 235)',
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const skillBossActivityComputed = () => {
    if (eventData.metric in allMetrics.skills){
      return 'experience'
    } else if (eventData.metric in allMetrics.bosses){
      return 'kills'
    } else if (eventData.metric in allMetrics.activities){
      return 'activity'
    } else if (eventData.metric in allMetrics.computed){
      return 'computed'
    } 
  }

  return (
    <div className="my-4 container" style={{color: '#FCFF00'}}>
      <Head>
        <title>Official OSRS Clan: Tea</title>
      </Head>

      <div className='container'>
        <div className='row'>
          <div className='d-flex col-12 justify-content-center align-items-center rounded gap-4' style={{backgroundColor: '#4C554A', height: 100}}>
            <h1 className='text-center mr-4'>
            {eventData.title}
            </h1>
            <Image 
              src={iconLinkGetter(eventData)}
              className='ml-4'
              width={80}
              height={80} /> 
          </div>
        </div>
      </div>

      <div className='row mt-4 justify-content-md-center gap-2'>
        <div className='col-12 col-md-3 rounded p-2' style={{backgroundColor: '#4C554A'}}>
          <WinnerText />
        </div>
        
        <div className='col-12 col-md-4 rounded p-2' style={{backgroundColor: '#4C554A'}}>
          <h2>Duration</h2>
          <div className="row">
            <div className="col-6">
              <p>Starts on: {eventStartDate.split('T', 1)}</p>
            </div>
            <div className="col-6">
              <p>Ends on: {eventEndDate.split('T', 1)}</p>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-3 rounded p-2' style={{backgroundColor: '#4C554A'}}>
          <h2>Total Gained</h2>
          <p>The top three gained {firstPlace.progress.gained + secondPlace.progress.gained + thirdPlace.progress.gained} {skillBossActivityComputed()}</p>
        </div>
      </div>

      <div className='row mt-4 p-3 rounded' style={{backgroundColor: '#4C554A'}}>
        <div className='col-12 col-md-8'>
          <h2>Top Three Participants</h2>
          <div>
            <h5>{firstPlace.player.username} in first. They started at {firstPlace.progress.start} and gained {firstPlace.progress.gained} to end at {firstPlace.progress.end}.</h5>
            <h5>{secondPlace.player.username} in second. They started at {secondPlace.progress.start} and gained {secondPlace.progress.gained} to end at {secondPlace.progress.end}.</h5>
            <h5>{thirdPlace.player.username} in third. They started at {thirdPlace.progress.start} and gained {thirdPlace.progress.gained} to end at {thirdPlace.progress.end}.</h5>
          </div>
        </div>
        <div className="mx-auto col-12 col-md-4">
          <div className="text-center rounded" style={{backgroundColor: 'white', width: 250}}>
            <PolarBear 
              options={xpOptions} 
              data={xpGained} 
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='container my-5'>
        <div className='row rounded col-10 mx-auto' style={{backgroundColor: '#4C554A'}}>
          <div className='text-center p-3'>
            <h2>Checkout the stats on
              <a 
                title={`Event statistics for ${eventData.title} on wiseoldman.net`} 
                href={`https://www.wiseoldman.net/competitions/${eventData.id}`}
                className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'
              >
                &nbsp;wiseoldman.net
              </a>
            </h2>
          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps({params}){
  // Fetch necessary data for the blog post using params.id
  const eventData = await fetch(`https://api.wiseoldman.net/v2/competitions/${params.eventId}`).then(res => res.json())
  return {
    props: {
      eventData,
    }
  }
}

export async function getStaticPaths(){
  const eventData = await fetch(`https://api.wiseoldman.net/v2/groups/651/competitions`).then(res => res.json())
  return {
    paths: eventData.map(event => {
      return {
        params: {
          eventId: event.id.toString()
        }
      }
    }),
    fallback: false
  }
}