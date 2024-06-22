import IMAGE from '../assets/III.png'

const HomePage = () => {
  return (
   <section className='min-h-[90vh] flex justify-center items-center px-20 text-[#fffffe]'>
      <div className='min-h-auto   flex justify-center items-center flex-wrap-reverse gap-10'>
      <div className='flex flex-col justify-center gap-5'>
      <h1 className="xs:text-2xl sm:text-3xl lg:text-6xl text-center"><span className='text-[#ff8906]'>Naruto</span> Shippuden</h1>
      <button className='bg-[#ff8906] hover:bg-[#f25f4c] transition ease-in-out delay-150 h-10 rounded'>Explore</button>
      </div>
       
                <img src={IMAGE} alt="" className='xs:h-[20rem] md:h-[21rem] lg:h-[26rem]'/>
      </div>
   </section>
  )
}

export default HomePage