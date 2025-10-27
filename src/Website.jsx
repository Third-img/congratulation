import Signage from "./Signage";
import BackgroundImage from "./assets/b_image1.png";
import SlideShowVideo from "./assets/slideshow_v.mp4";
import Music from "./assets/music.mp3";

export default function Website() {
  return (
    <>
      <audio
        className="music-player"
        src={Music}
        preload="auto"
        autoPlay
        loop
      />
      <div className="container">
        <section className="hero">
          <video
            className="slideshow-video"
            src={SlideShowVideo}
            autoPlay
            muted
            loop
            playsInline
            // this is the perfect lines of code to use when using a video
          >
            I love you, wala 'yung video? Hehe, sorry!
          </video>
        </section>
        <section className="placards">
          <Signage />
        </section>
        <section className="content">
          <div className="message-container">
            <div className="dear-header">Dear Asha,</div>
            <div className="dear-body">
              Congratulations on your 'pinning'! You have reached another
              milestone and as always— I'm very proud of you. You have been
              working hard to get to where you are right now and we haven't
              failed to see it. You were strong, you had the wit but you kept
              quiet out of care. Despite of all the problems, all you have
              poured on to our cups were love, care, and patience. We won't ever
              know why you're hated, but I will say that you are more loved than
              hated. More loved by me and other people around you who you've
              given love to. I assure you that even on the toughest battles
              you'll never be alone, and I'll also be there when it's time for
              you celebrate. I love you! I always have.
            </div>
          </div>
          <div className="image-holder">
            <img src={BackgroundImage} alt="Background Image" />
          </div>
        </section>
      </div>
      {/* preload makes sure that the music plays or loads when needed, automatically still plays */}
    </>
  );
}
