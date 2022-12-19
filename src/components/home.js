import forza from "../videos/forza.mp4";
import { FidgetSpinner } from  'react-loader-spinner';
import { useState } from "react";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);

  const handleVideoEnd = () => {
    setIsLoading(false);
    console.log('load end!');
  }

  const handleVideoStart = () => {
    setIsLoading(true);
    console.log('load start!');
  }

  return (
    <main>
      {isLoading && 
        <div className="loader">
          <FidgetSpinner
          visible={true}
          height="300"
          width="300"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#FFFF00', '#0000ff']}
          backgroundColor="#de182e"
          />
        </div>}
      <div className="home video">
        <video src={forza} autoPlay muted loop onLoadStart={() => handleVideoStart()} onLoadedData={() => handleVideoEnd()}></video>
      </div>
    </main>
  );
};

export default Home;
