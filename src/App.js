import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import SearchPage from './components/SearchPage';
import DetailsPage from './components/DetailsPage';
import "@fontsource/m-plus-rounded-1c";
import "@fontsource/open-sans";

//import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Footer from "./components/Footer";

function App() {
  /*
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPGdPPyfknjJGOx2N_HWxc8bV6H9sgKFE",
  });


  if (!isLoaded) return <div>Loading...</div>
  */

  return (
    <Router>
      <div className="App">
        <Nav />

        <div className="PageContent">    
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/search-results">
              <SearchPage />
            </Route>
            <Route exact path="/property-details">
              <DetailsPage />
            </Route>
          </Switch>
        </div>
        {/*<h1 className="title">Properties Sorted by weekly rent</h1>
        <input type="button" className="sortButton" value="Sort" onClick={getAnswer}/>
        <iframe src="https://my.atlistmaps.com/map/76e71111-c53e-4dd0-8c33-07025bf4ea3e?share=true" allow="geolocation" width="100%" height="800px" frameborder="0" scrolling="no" allowfullscreen></iframe>
        {/*<GoogleMap 
          zoom={10}
          center={{ lat: -36.848461, lng: 174.763336}}
          mapContainerClassName="googleMap"
        ></GoogleMap>
        <p id="display"></p>*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
