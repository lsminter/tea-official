import { Inter } from 'next/font/google'
import Image from 'next/image'
import teaJumping from '../../images/teaJumping.png'
import vetionSitting from '../../images/vetionSitting.png'
import discordIcon from '../../images/discordIcon.svg'
import manInFrontOfDragon from '../../images/manInFrontOfDragon.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='py-5' style={{backgroundColor: '#B9C6B4', color: '#FCFF00'}}>

      {/* Header */}
      <div className='container'>
        <div className='row'>
          <div className='d-flex col-12 justify-content-center align-items-center rounded' style={{backgroundColor: '#768271', height: 100}}>
            <h1 className='text-center'>Tea: A Place For Mains, Irons, and Degens</h1>
          </div>
        </div>
      </div>
      
      {/* Bio */}
      <div className='container mt-4'>
        <h2>
          Who Are We?
        </h2>
        <div className='row align-items-center justify-content-center'>
          <div className='col-7'>
            <p>
            We're a friendly bunch of about 100 active members. There is plenty of banter, but all in jest. We enjoy a wide range of content including skilling, bossing, and stuff just for fun. We have a decent spread of abilities with many folk interested god wars, raids, inferno, and more... We're currently undefeated in clan vs. clan bingo events, and we host skill and boss of the week events within the clan on a biweekly basis.
            </p>
            <p>
            Cheers from the clan leader, Harry!
            </p>
          </div>
          <div className='col-5'>
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
          <div className='col-4'>
            <Image
              src={vetionSitting}
              className='img-fluid rounded'
              alt="boss or skill of the week"
            />
          </div>
          <div className='col-8'>
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
          <div className='col-5'>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
          <div className='col-5'>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
          <div className='col-5'>
            <p>Boss of the week ➡️</p>
            <Image
              src={vetionSitting}
              className='img-fluid rounded'
              alt='boss or skill icon of previous event'
            />
          </div>
          <div className='col-5'>
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
          <div  className='col-8'>
            <h2>
              Come Join Us!
            </h2>
            <p>
              The only requirement for you to join is that you respect the other members and behave yourself. We're currently looking for new members! If you're looking for a great community to join, you can find us by searching for "Tea" in the clan tab (green smiley face tab).
            </p>
          </div>
          <Image src={discordIcon} className='col-2 img-fluid' alt="Discord Icon"/>
        </div>
      </div>

      {/* Competition Form */}
      <div className='container mt-4'>
        <h2>Looking For Competition?</h2>
        <div className='row'>
          <div className='col-6'>
            <p>We do Clan vs. Clan competitions! If you have a clan and are looking for some fun competition, fill out the form and let us know what you're looking for.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <div className='col-6 w-100'>
              <p>Clan Name: </p>
              <div className='mb-3'>
                <input></input>
              </div>
            </div>
            <div className='col-6 w-100'>
              <p>Your RSN or Discord Name: </p>
              <div className='mb-2'>
                <input></input>
              </div>
            </div>
          </div>
          <div className='col-7'>
            <p>Tell us about your clan and competition:</p>
            <textarea className='w-100 h-75'></textarea>
          </div>
          <div className='col-2 h-100'>
            <button className='w-100 h-50 btn btn-primary'>Submit!</button>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className='container mt-4 carousel'>
        <h2>Tools</h2>
        <div className='d-flex flex-row flex-nowrap overflow-auto gap-4'>
        <div className='col-4 bg-image card'>
            <Image
              src={manInFrontOfDragon}
              className='w-100'
              alt='man with pickaxe standing infront of a dragon'
            />
            <div className="card-img-overlay text-center">
              <h4 className='text-danger'>Custom heading</h4>
            </div>
          </div>
          <div className='col-4 bg-image card'>
            <Image
              src={manInFrontOfDragon}
              className='w-100'
              alt='man with pickaxe standing infront of a dragon'
            />
            <div className="card-img-overlay text-center">
              <h4 className='text-danger'>Custom heading</h4>
            </div>
          </div>
          <div className='col-4 bg-image card'>
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
          <div className='col-3 bg-success rounded p-2 text-center'>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center'>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center'>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center'>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
          <div className='col-3 bg-success rounded p-2 text-center'>
            <h5>Username</h5>
            <p>Date</p>
            <p>Achievement</p>
          </div>
        </div>
      </div>


      {/* Footer */}
      <div className='container my-5'>
        <div className='row text-center'>
          <h2>We'll See You In Game!</h2>
        </div>
      </div>
    </div>
  )
}
