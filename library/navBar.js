import Image from 'next/image';

import kermitSippingTea from '../images/kermitSippingTea.png'

const NavBar = () => {
  return (
    <div className='container mb-4 mt-2'>
      <nav>
        <p>
          <a
            title="Goes to home page" 
            href="/"
          >
            <Image
              src={kermitSippingTea}
              width={55}
              height={50}
              className='rounded-circle'
            />
          </a>
        </p>
      </nav>
    </div>
  )
}

export default NavBar;