import nftCube from "./images/images/image-equilibrium.jpg"
import avatar from "./images/images/image-avatar.png"
import ethereum from "./images/images/icon-ethereum.svg"
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="inner-container">

      <img src={nftCube} alt="NFT shining cube" />
      <h1>Equilibrium #3429</h1>
      <p>
        Our Equilibrium collection promotes balance and calm. {' '}
      </p>
      <section className="inner-section">
        <div className="eth-left-side">
        <img className="ethereum-logo" src={ethereum} alt="ethereum" />
        <h2>0.041 ETH</h2>

        </div>
        <p>3 days left</p>
      </section>
        <hr className="line_FUCKING-LINE" />
      <section className="bottom-section">
        <img className="avatar-image" src={avatar} alt="logo avatart" />
        <p>Creation of</p>
        <span className="creator-name">Jules Wyvern</span>
      </section>
      </main>
    </div>
  );
}

export default App;
