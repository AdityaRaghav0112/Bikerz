import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Landing = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>

      <div className="cover-2 p-10">
        <h2 className='text-blue-600 font-semibold text-2xl'>Lorem ipsum dolor sit.</h2>
        <div className="main flex gap-10">
            <div className="content">
                <h2 className='text-5xl font-bold'>Lorem ipsum <br /> dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed harum inventore earum fugit soluta officiis rerum accusantium ex esse alias non minus vitae temporibus unde, beatae pariatur! Quaerat repellendus distinctio voluptas adipisci eaque accusantium beatae commodi? Aut facere, nemo possimus voluptate porro nihil mollitia voluptatum? Deserunt aperiam est ex numquam voluptates earum dolores dicta corrupti sint voluptatibus rerum, sunt inventore similique omnis possimus vitae iusto voluptatem animi! Enim aut quibusdam, neque iure fugit voluptates aliquam ut aspernatur asperiores ipsa laborum dolore quo, veniam a? Perferendis aut fuga, tenetur consectetur nulla quod id nisi dolorem, debitis, vero possimus. Modi, saepe.</p>

                {/* CONTINUE FROM HERE */}

            </div>
            <img className='h-screen w-1/2 mr-10' src="/cover2.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Landing
