const About = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
          We love
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
      At Comfy, shopping for furniture isn’t just about finding pieces—it’s 
  about creating a home that reflects your style and comfort. We love this 
  site because it offers a seamless and enjoyable shopping experience, whether
   you’re browsing for a cozy new sofa, a stylish dining set, or the perfect 
   accent piece. With a carefully curated selection, high-quality craftsmanship,
    and an easy-to-navigate interface, Comfy makes decorating your space
     effortless and fun. Plus, with excellent customer service and convenient
      delivery options, furnishing your home has never been easier. This is
       more than just a furniture store—it’s a place where comfort meets style. 
      </p>
    </>
  );
};
export default About;
