import React from 'react'
import Hero from '../components/Hero'
import {ArrowRight, Phone, Motorbike} from 'lucide-react'
import Coolbg from '../components/Coolbg'

const Landing = () => {
  const cards = [
    {
      img: "/img-1.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/img-2.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/img-3.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
    {
      img: "/img-4.jpg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
    },
  ];

  return (
    <div className=''>
      <Hero/>

      <div className="cover-2 p-10">
        <h2 className='text-blue-600 font-semibold text-2xl'>Lorem ipsum dolor sit.</h2>
        <div className="main flex gap-10">
            <div className="content">
                <h2 className='text-5xl font-bold'>Lorem ipsum <br /> dolor sit amet.</h2>
                <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed harum inventore earum fugit soluta officiis rerum accusantium ex esse alias non minus vitae temporibus unde, beatae pariatur! Quaerat repellendus distinctio voluptas adipisci eaque accusantium beatae commodi? Aut facere, nemo possimus voluptate porro nihil mollitia voluptatum? Deserunt aperiam est ex numquam voluptates earum dolores dicta corrupti sint voluptatibus rerum, sunt inventore similique omnis possimus vitae iusto voluptatem animi! Enim aut quibusdam, neque iure fugit voluptates aliquam ut aspernatur asperiores ipsa laborum dolore quo, veniam a? Perferendis aut fuga, tenetur consectetur nulla quod id nisi dolorem, debitis, vero possimus. Modi, saepe.</p>
              <div className="showcase flex items-center gap-5 p-2">
                <img className='size-50' src="/sc1.png" alt="" />
                <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in excepturi dignissimos,  odit voluptate molestias <br /> ratione dolor quis obcaecati commodi itaque enim saepe unde neque ipsam animi, ex optio tenetur reiciendis <br /> necessitatibus. Dolor, distinctio. Recusandae dolores dicta laboriosam nesciunt ut.</p>
              </div>
              <div className="showcase flex items-center gap-5 p-2">
                <img className='size-50' src="/sc3.png" alt="" />
                <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in excepturi dignissimos,  odit voluptate molestias <br /> ratione dolor quis obcaecati commodi itaque enim saepe unde neque ipsam animi, ex optio tenetur reiciendis <br /> necessitatibus. Dolor, distinctio. Recusandae dolores dicta laboriosam nesciunt ut.</p>
              </div>
              <div className="showcase flex items-center gap-5 p-2">
                <img className='size-50' src="/sc2.png" alt="" />
                <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in excepturi dignissimos,  odit voluptate molestias <br /> ratione dolor quis obcaecati commodi itaque enim saepe unde neque ipsam animi, ex optio tenetur reiciendis <br /> necessitatibus. Dolor, distinctio. Recusandae dolores dicta laboriosam nesciunt ut.</p>
              </div>

              <div className="buttons flex py-5 px-2 gap-8">
                <button className='bg-blue-500 flex items-center gap-2 font-semibold px-7 py-2 text-white rounded-lg drop-shadow-2xl'>Contact <ArrowRight/></button>
                <button className='text-blue-500 flex items-center gap-2 font-semibold'><Phone/>123456789</button>
              </div>
            </div>
            <img className='h-screen w-1/2 mr-10' src="/cover2.png" alt="" />
        </div>
      </div>

      <section className="w-full px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* LEFT CONTENT */}
      <div className="space-y-6">
        <h4 className="text-blue-600 font-semibold text-lg">
          Lorem ipsum dolor sit amet
        </h4>

        <h1 className="text-4xl font-extrabold leading-snug">
          LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU <br /> ELIT.
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-xl">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo 
          eleifend condimentum in vitae faucibus. Amet massa malesuada sit 
          pretium. Donec pharetra erat lacus suspendisse ornare.
        </p>

        {/* FEATURES LIST */}
        <div className="space-y-6">

          <div className="flex items-start gap-4">
            <Motorbike
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-bold">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-start gap-4">
            <Motorbike
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-bold">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-start gap-4">
            <Motorbike
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-bold">
                Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
                viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
                vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-end">
        <img
          src="/cover3.png"
          alt=""
          width={600}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </section>

    <Coolbg/>

     <div className="max-w-6xl mx-auto px-4 py-12 relative">
      {/* top text */}
      <p className="text-blue-600 font-medium mb-2">Lorem ipsum dolor sit amet</p>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
        LOREM IPSUM DOLOR SIT
      </h2>

      <p className="text-gray-600 max-w-3xl mb-8 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. 
        Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at 
        felis aliquet. Hendrerit tellus at purus lectus.
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-md overflow-hidden border"
          >
            <img src={c.img} alt="" className="w-full h-52 object-cover" />

            <div className="p-5">
              <h3 className="font-semibold text-sm mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {c.desc}
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Background wave (your faint lines background) */}
      <div className="absolute right-0 top-0 w-72 h-full opacity-20 pointer-events-none">
        <img
          src="/bg-lines.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </div>
  )
}

export default Landing
