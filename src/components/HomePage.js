import "@fontsource/m-plus-rounded-1c";
import "@fontsource/open-sans";
import HomeSlider from "./HomeSlider";
import SearchMenu from "./SearchMenu";

function HomePage() {
    return (
        <div className="HomeContents">
            <div className="HomeCard">
                <h1>Finding the perfect property<br></br>starts here</h1>
                <SearchMenu />
                <a href="/search-results"><button type="button" className="SearchButton"><p>Search</p></button></a>
            </div>

            <HomeSlider />

            <div className="Resources">
                <div className="ResourcesCard" id="services"><h2>Our services</h2></div>
                <div className="ResourcesCard"><h2>Why choose us?</h2></div>
                <div className="ResourcesCard"><h2>Meet the team</h2></div>
                <div className="ResourcesCard"><h2>Useful Resources</h2></div>
            </div>
        </div>
    );
}

export default HomePage;
