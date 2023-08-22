 import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-col'>
    <div className="flex items-center flex-col">
    <h1 className='head_text text-center '>
      Discover & Secure
      {/* <br className='max-md:hidden' /> */}
      <span className='orange_gradient text-center'>Jobs </span>
      and
            <span className='orange_gradient text-center'> Gigs</span>

    </h1>
    <p className='desc text-center'>
Unlocking Opportunities and Ensuring Safety,navigating the World of Jobs and Gigs with Confidence
    </p>
</div>
     <Feed />
  </section>
);

export default Home;
