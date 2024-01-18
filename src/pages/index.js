import { Inter } from 'next/font/google'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'

import teaJumping from '../../images/teaJumping.png'
import vetionSitting from '../../images/vetionSitting.png'
import discordIcon from '../../images/discordIcon.svg'
import manInFrontOfDragon from '../../images/manInFrontOfDragon.jpeg'
import loginBackground from '../../images/loginBackground.png'
import vetionAndDragonBackground from '../../images/vetionAndDragonBackground.png'
import voidwakerBackground from '../../images/voidwakerBackground.png'
import dt2Background from '../../images/dt2Background.png'

const inter = Inter({ subsets: ['latin'] })
// add toast for popup after submitting form
export default function Home() {
  const [clanName, setClanName] = useState('')
  const [rsName, setRsName] = useState('')
  const [competition, setCompetition] = useState('')

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
    )
  }

  return (
    <div className='py-5 has-bg-img' style={{color: '#FCFF00'}}>
      
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
        <div className='row'>
          <div className='col-3'>
            <p>Boss of the week ➡️</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam aliquam justo, a gravida tellus fermentum non. Suspendisse metus nunc, placerat fringilla tristique ac, cursus non massa. Aenean nec urna nibh. Integer gravida consectetur consequat. Maecenas dignissim rhoncus lorem, sed tempus risus posuere ac. Pellentesque quis augue porttitor lorem pellentesque feugiat vel quis dolor. Proin auctor tellus eget lectus tristique, eu blandit purus feugiat. In ut felis quis risus semper aliquet sit amet sit amet odio. Nam sed justo dui. Vestibulum eget consequat purus.</p>
          </div>
        </div>
      </div>

      {/* Recent events */}
      <div className='container mt-4 py-2'>
        <h2>
          Recent Events
        </h2>
        <div className='d-flex flex-row flex-nowrap overflow-auto gap-3'>
          <div className='col-5' style={{minWidth: 290}}>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
          <div className='col-5' style={{minWidth: 290}}>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
          <div className='col-5' style={{minWidth: 290}}>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
          <div className='col-5' style={{minWidth: 290}}>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
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
              The only requirement for you to join is that you respect the other members and behave yourself. We&apos;re currently looking for new members! If you&apos;re looking for a great community to join, you can find us by searching for &ldquo;Tea&ldquo; in the clan tab (green smiley face tab).
            </p>
          </div>
          <Image src={discordIcon} className='col-12 col-md-2 img-fluid' style={{width: 200}} alt="Discord Icon"/>
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
                    <input type='text' value={clanName} onChange={e => setClanName(e.target.value)}></input>
                  </div>
                </label>
              </div>
              <div className='col-12 col-lg-6'>
                <label>Your RSN or Discord Name: </label>
                <div className='mb-2'>
                  <input type='text' name='rsn' value={rsName} onChange={e => setRsName(e.target.value)}></input>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-9'>
              <label>Tell us about your clan and competition:</label>
              <textarea className='w-100 h-75' name='message' value={competition} onChange={e => setCompetition(e.target.value)} />
            </div>
            <div className='col-3 h-100 mt-4'>
              <button className='w-100 h-50 btn btn-primary' type='submit'>Submit!</button>
            </div>
          </div>
        </form>
      </div>

      {/* Tools Section */}
      <div className='container mt-4 carousel'>
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
      </div>

      {/* Recent Activities */}
      <div className='container mt-4 carousel'>
        <h2>Recent Activities</h2>
        <div className='d-flex flex-row flex-nowrap overflow-auto gap-3 align-items-center' style={{height: 200}}>
          <div className='col-3 bg-success rounded p-2 text-center' style={{width: 250}}>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center' style={{width: 250}}>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center' style={{width: 250}}>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center' style={{width: 250}}>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center' style={{width: 250}}>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
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