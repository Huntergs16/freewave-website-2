import ShoutOut from "@/components/Shoutout";

export default function About() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-between p-3 font-rajdhani'>
      <div className='flex flex-col items-center gap-16 w-full'>
        <p className='text-3xl'>About Us</p>
        <div className='text-xl px-10'>
          <p>
            Why ride another wave when you can create your own. We are not bound
            by society norms and we are here to make our own wave.
          </p>
          <br />
          <p>
            We are a group of friends made up of artists, videographers,
            producers, photographers, and more.
          </p>
          <br />
          <p>
            We&apos;ve expanded to produce podcasts, motivational short films,
            twitch streams, and other sources of inspiration.
          </p>
        </div>
        <p className='text-2xl'>Our spread:</p>
        <div className='flex justify-around w-full h-full'>
          <ShoutOut
            name={"Downbad Podcast"}
            image={"/placeholder-image-300x225.png"}
            description={"We are downbad"}
            link={"https://www.instagram.com/downbpodcast/"}
          />
          <ShoutOut
            name={"Unfair Films"}
            image={"/placeholder-image-300x225.png"}
            description={"We are unfair"}
            link={"https://www.instagram.com/unfairfilms/"}
          />
          <ShoutOut
            name={"Rushed Hour"}
            image={"/placeholder-image-300x225.png"}
            description={"We are rushed"}
            link={"https://www.instagram.com/rushedhourpodcast/"}
          />
        </div>
      </div>
    </div>
  );
}
