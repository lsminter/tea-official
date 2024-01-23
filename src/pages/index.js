import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Toaster } from "react-hot-toast";

import { recentCompetition, allCompetitions } from '../../library/recentComp';
import {eventDataFetch} from '../../library/recentCompData'
import {recentAchievements} from '../../library/recentAchievements'

import teaJumping from '../../images/teaJumping.png'
import vetionSitting from '../../images/vetionSitting.png'
import discordIcon from '../../images/discordIcon.svg'
import manInFrontOfDragon from '../../images/manInFrontOfDragon.jpeg'
import loginBackground from '../../images/loginBackground.png'
import vetionAndDragonBackground from '../../images/vetionAndDragonBackground.png'
import voidwakerBackground from '../../images/voidwakerBackground.png'
import dt2Background from '../../images/dt2Background.png'

const inter = Inter({ subsets: ['latin'] })


// todo: format links, background color for recent achievements

export default function Home() {
  const [clanName, setClanName] = useState('')
  const [rsName, setRsName] = useState('')
  const [competition, setCompetition] = useState('')
  

  // These are used to determin if the ending date in the competition is a bigger number than the current date. These are used in the conditional rendering down in the Current Event section.
  const endingCompDate = Date.parse(eventDataFetch.endsAt)
  const currentDate = Date.now()  

  const topThree = eventDataFetch.participations.slice(0,3).map((players) => {
    return players.player.username
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(process.env.WEBHOOK, 
      {
        "username": "Mint Tea",
        "channel_id": process.env.CHANNEL_ID,
        "embeds": [{
          "fields": [
            {"name": "RSN",
            "value": `${rsName}`},
            {"name": "Clan Name",
            "value": `${clanName}`},
            {"name": "Message",
            "value": `${competition}`}
          ]
        }]
      }
    ).catch((error)=> {
      console.log(error)
      toast.success(`Message did not send due to error: ${error}`)
    }).then(() => {
      setClanName('')
      setRsName('')
      setCompetition('')
    },
    toast.success('Message Sent!')
    )
  }

  return (
    <div className='py-5 has-bg-img fw-bold' style={{color: '#FCFF00'}}>
      
      <div className='position-absolute opacity-50 bg-image' style={{zIndex: -10}}>
        <Image
          className='bg-image img-fluid'
          src={loginBackground}
          alt="default login screen for old school runescape"
        />
        <Image
          className='bg-image img-fluid'
          src={vetionAndDragonBackground}
          alt="blender image of vetion and a dragon"
        />
        <Image
          className='bg-image img-fluid d-block d-xxl-none'
          src={voidwakerBackground}
          alt="blender image of a character holding a voidwaker"
        />
        <Image
          className='bg-image img-fluid d-block d-lg-none'
          src={dt2Background}
          alt="login backgroudn for desert treasure two release"
        />
      </div>

      {/* Header */}
      <div className='container has-bg-img'>
        <div className='row'>
          <div className='d-flex col-12 justify-content-center align-items-center rounded' style={{backgroundColor: '#768271', height: 100}}>
            <h1 className='text-center'>Tea: A Place For Mains, Irons, and Degens</h1>
          </div>
        </div>
      </div>
      
      {/* Bio */}
      <div className='container mt-4 has-bg-img'>
        <h2>
          Who Are We?
        </h2>
        <div className='row align-items-center justify-content-center'>
          <div className='col-12 col-md-7'>
            <p>
            We&apos;re a friendly bunch of about 100 active members. There is plenty of banter, but all in jest. We enjoy a wide range of content including skilling, bossing, and stuff just for fun. We have a decent spread of abilities with many folk interested god wars, raids, inferno, and more... We&apos;re currently undefeated in clan vs. clan bingo events, and we host skill and boss of the week events within the clan on a biweekly basis.
            </p>
            <p>
            Cheers from the clan leader, Harry!
            </p>
          </div>
          <div className='col-12 col-md-5'>
            <Image 
              src={teaJumping}
              alt="clan members jumping in clan hall"
              className='img-fluid rounded'
            />
          </div>
        </div>
      </div>
      
      {/* Current Event */}
      <div className='container mt-4'>
        <h2>Current Event</h2>
        {/* If endingCompDate is bigger than the currentDate, there is a competition currently running. To get this running on prod, the variables above will need to be changed. */}
        {endingCompDate > currentDate ? (
          <div>
            <div className='row'>
              <div className='col-5 col-sm-6'>
                <p><a className='text-decoration-none' href={`https://www.wiseoldman.net/competitions/${recentCompetition.id}`} style={{color: '#FCFF00'}}>The current event is: {recentCompetition.title} ➡️</a></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <Image
                  src={vetionSitting}
                  className='img-fluid rounded'
                  alt="boss or skill of the week"
                />
              </div>
              <div className='col-12 col-md-8'>
                <p>We have a competition running right now! This competition is on {recentCompetition.metric}. Check out the scores on <a className='text-decoration-none' href={`https://www.wiseoldman.net/competitions/${recentCompetition.id}`} style={{color: '#FCFF00'}}>wiseoldman.net</a>. The current top three playres are &quot;{topThree[0]}&quot; in first, &quot;{topThree[1]}&quot; in second, and &quot;{topThree[2]}&quot; brining up third place.</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className='row'>
              <div className='col-5 col-sm-6'>
                <p><a className='text-decoration-none' href={`https://www.wiseoldman.net/competitions/${recentCompetition.id}`} style={{color: '#FCFF00'}}>The previous event was: {recentCompetition.title} ➡️</a></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <Image
                  src={vetionSitting}
                  className='img-fluid rounded'
                  alt="boss or skill of the week"
                />
              </div>
              <div className='col-12 col-md-8'>
                <p>We don&apos;t have a competition running right now. The most recent competition was {recentCompetition.title}. Check out the scores on <a className="text-decoration-none" href={`https://www.wiseoldman.net/competitions/${recentCompetition.id}`} style={{color: '#FCFF00'}}>wiseoldman.net</a>. The top three players were &quot;{topThree[0]}&quot; in first, &quot;{topThree[1]}&quot; in second, and &quot;{topThree[2]}&quot; brining up third place.</p>
              </div>
            </div>
          </div>
        )

        }
      </div>

      {/* Recent events */}
      <div className='container mt-4 py-2'>
        <h2>
          Recent Events
        </h2>
        <div className='d-flex flex-row flex-nowrap overflow-auto gap-3'>
          {allCompetitions.slice(0,5).map((events) => {
            return(
              <div key={events.id} className='col-5' style={{minWidth: 290}}>
                <a className='text-decoration-none' href={`https://www.wiseoldman.net/competitions/${events.id}`} style={{color: '#FCFF00'}}>
                  <p>{events.title} ➡️</p>
                  <Image
                    src={vetionSitting}
                    className='img-fluid rounded rounded'
                    alt='boss or skill icon of previous event'
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>

      {/* Discord Invite */}
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          <div  className='col-12 col-md-8'>
            <h2>
              Come Join Us!
            </h2>
            <p>
              The only requirement for you to join is that you respect the other members and behave yourself. We&apos;re currently looking for new members! If you&apos;re looking for a great community to join, you can find us by searching for &ldquo;Tea&ldquo; in the clan tab (green smiley face tab). Just click on the Discord Image.
            </p>
          </div>
          <a href="https://discord.gg/tea-stain" className='col-12 col-md-2 link-success' style={{width: 200}}>
            <Image src={discordIcon} className='img-fluid' alt="Discord Icon"/>
          </a>
        </div>
      </div>

      {/* Competition Form */}
      <div className='container mt-4'>
        <h2>Looking For Competition?</h2>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <p>We do Clan vs. Clan competitions! If you have a clan and are looking for some fun competition, fill out the form and let us know what you&apos;re looking for.</p>
          </div>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-12 col-lg-3'>
              <div className='col-12 col-lg-6'>
                <label>Clan Name: 
                  <div className='mb-3'>
                    <input type='text' value={clanName} onChange={e => setClanName(e.target.value)} required></input>
                  </div>
                </label>
              </div>
              <div className='col-12 col-lg-6'>
                <label>Your RSN or Discord Name: </label>
                <div className='mb-2'>
                  <input type='text' name='rsn' value={rsName} onChange={e => setRsName(e.target.value)} required></input>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <label>Tell us about your clan and competition:</label>
              <textarea className='w-100 h-75' name='message' value={competition} onChange={e => setCompetition(e.target.value)} required/>
            </div>
            <div className='col-3 h-100 mt-4'>
              <Toaster position="bottom-center" /> 
              <button className='w-100 h-50 btn btn-primary' type='submit'>Submit!</button>
            </div>
          </div>
        </form>
      </div>

      {/* Tools Section */}
      {/* <div className='container mt-4 carousel'>
        <h2>Tools</h2>
        <div className='d-flex flex-row flex-nowrap overflow-auto gap-4'>
        <div className='col-4 bg-image card' style={{width: 300, minHeight: 270}}>
            <Image
              src={manInFrontOfDragon}
              className='w-100'
              alt='man with pickaxe standing infront of a dragon'
            />
            <div className="card-img-overlay text-center">
              <h4 className='text-danger'>Custom heading</h4>
            </div>
          </div>
          <div className='col-4 bg-image card' style={{width: 300, minHeight: 270}}>
            <Image
              src={manInFrontOfDragon}
              className='w-100'
              alt='man with pickaxe standing infront of a dragon'
            />
            <div className="card-img-overlay text-center">
              <h4 className='text-danger'>Custom heading</h4>
            </div>
          </div>
          <div className='col-4 bg-image card' style={{width: 300, minHeight: 270}}>
            <Image
              src={manInFrontOfDragon}
              className='w-100'
              alt='man with pickaxe standing infront of a dragon'
            />
            <div className="card-img-overlay text-center">
              <h4 className='text-danger'>Custom heading</h4>
            </div>
          </div>
        </div>
      </div> */}

      {/* Recent Activities */}
      <div className='container mt-4 carousel'>
        <h2>Recent Achievements</h2>
        <div className='d-flex flex-row flex-nowrap overflow-auto gap-3 align-items-center'>
        {recentAchievements.slice(0,5).map((achievement) => {
            return(
              <div key={achievement.name} className='col-3 rounded p-2 text-center' style={{width: 250, height: 150, backgroundColor: '#768271'}}>
                <h5>{achievement.player.username}</h5>
                <p>{achievement.createdAt.split('T', 1)}</p>
                <p>{achievement.name}</p>
              </div>
            )
          })}
          
        </div>
      </div>


      {/* Footer */}
      <div className='container my-5'>
        <div className='row text-center'>
          <h2>We&apos;ll See You In Game!</h2>
        </div>
      </div>
    
      <p>
        <a className='text-white text-decoration-none' href="https://github.com/lsminter">
          Site by Lucas Minter
        </a>
      </p>

    </div>
    
  )
}


// dog licking a toothbrush, 2d, cartoon