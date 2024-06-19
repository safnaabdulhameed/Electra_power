import { useState } from 'react'
import Navbar from './components/Navbar'
import CarouselBanner from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='container'>
      <Navbar />
      {/* <CarouselBanner /> */}
      <div class="p-5 mb-4">
        <div class="container-fluid d-flex justify-content between py-5">
          <div>
            <div className='d-flex justify-content-between'>
              <h2 class=""><span className='border-start border-black border-3 ps-4'>LOOK NO FURTHER FOR</span> <span className='text-orange'>YOUR ULTIMATE ELECTRICAL</span><br /><span className='text-lightBlue ps-4'> PROJECT SOLUTIONS!</span> </h2>
              <div className='d-flex align-items-center'>
                <button class="btn btn-light rounded-pill align-items-center p-3 px-4" type="button">OUR SERVICE<svg className=' ms-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg></button>

              </div>
            </div>


            <p class="col-md-8 text-secondary ps-4">Our commitment to electrical expertise extends beyond mere service - it's a pledge. We're dedicated to shaping the world with every connection, driving progress forward. With us, you're not simply a customer; you're a valued partner in illuminating the path towards a powerful future.
            </p>
          </div>

        </div>
      </div>
      {/* about us */}
      <div className='d-flex justify-content-between bg-blue'>
        <div className="about-us-container">
          <h2>About <span className="highlight">Us</span></h2>
          <p>
            Established in 2013, we are an A-grade HT <strong>electrical contractor &amp; engineers</strong> known for trust and technical excellence. Our experienced team delivers comprehensive electrical solutions for projects of any scale.
          </p>
          <ul>
            <li>Seamless project management with turnkey expertise.</li>
            <li>Client-centred pricing ensuring collaboration.</li>
            <li>Unwavering trust for project success.</li>
            <li>Technical excellence ensures optimal solutions.</li>
            <li>Proven success showcases track record.</li>
          </ul>
          <div className="commitment">
            <p>
              We are committed to fostering long-term partnerships, collaborating closely with our clients to translate their vision into a reality. With Electro Power Engineering as your partner, you can be confident that your electrical infrastructure is built to last, empowering your business for a brighter future.
            </p>
          </div>
        </div>
        <div className="about-us-container text-white p-3 py-4">
          <h2 className='pb-2'><span className='border-bottom border-secondary pb-2'>Ab</span>out <span className="text-orange">Us</span></h2>
          <p className='pb-3'>
            Established in 2013, we are an A-grade HT <strong>electrical contractor &amp; engineers</strong> known for trust and technical excellence. Our experienced team delivers comprehensive electrical solutions for projects of any scale.
          </p>
          <ul className='pb-3'>
            <li className='mb-2'>Seamless project management with turnkey expertise.</li>
            <li className='mb-2'>Client-centred pricing ensuring collaboration.</li>
            <li className='mb-2'>Unwavering trust for project success.</li>
            <li className='mb-2'>Technical excellence ensures optimal solutions.</li>
            <li className='mb-2'>Proven success showcases track record.</li>
          </ul>
          <div className="commitment bg-liteBlue p-4 rounded-4">
            <p>
              We are committed to fostering long-term partnerships, collaborating closely with our clients to translate their vision into a reality. With Electro Power Engineering as your partner, you can be confident that your electrical infrastructure is built to last, empowering your business for a brighter future.
            </p>
          </div>
        </div>
      </div>


    </div>


  )
}

export default App
