import forza from "../videos/forza.mp4";

const Home = () => {
  return (
    <main>
      <div className="home video">
        <video src={forza} autoPlay muted loop></video>
      </div>
    </main>
  );
};

export default Home;
