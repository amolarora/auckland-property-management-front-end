import SearchMenu from "./SearchMenu";

function SearchPage() {
    return(
        <div className="SearchContents">
            <div className="SearchCard">
                <div className="SearchPageMenu"><SearchMenu/></div>
                <button type="button" className="ResetButton"><p>Reset Filters</p></button>
                <a href="/search-results"><button type="button" className="SearchButton"><p>Search</p></button></a>
            </div>

            <p className="ResultsNum">Showing 10 results</p>

            <iframe className="SearchMap" src="https://my.atlistmaps.com/map/76e71111-c53e-4dd0-8c33-07025bf4ea3e?share=true" allow="geolocation" width="950px" height="620px" frameborder="0" scrolling="no" title="SearchMap" allowfullscreen></iframe>
            <div className="SearchResults">
                <div className="ResultsCard1">
                    <img className="CardImg1" src={require('../images/property2-4.jpg')} alt=''></img>
                    <img className="BedImg" src={require('../images/bedrooms.png')} alt=''></img> <p className="BedNum">3</p>
                    <img className="BathImg" src={require('../images/bathroom.png')} alt=''></img> <p className="BathNum">1</p>
                    <img className="PetImg" src={require('../images/pets.png')} alt=''></img>
                    <p className="SearchCardTitle">New Lynn</p>
                    <p className="SearchCardRent">$599 per week</p>
                </div>
                <a className='PropertyLink' href='/property-details'>
                    <div className="ResultsCard2">
                        <img className="CardImg2" src={require('../images/property10-6.jpg')} alt=''></img>
                        <img className="BedImg" src={require('../images/bedrooms.png')} alt=''></img> <p className="BedNum">5</p>
                        <img className="BathImg" src={require('../images/bathroom.png')} alt=''></img> <p className="BathNum">3</p>
                        <img className="PetImg" src={require('../images/pets.png')} alt=''></img>
                        <p className="SearchCardTitle">Forrest Hill</p>
                        <p className="SearchCardRent">$1150 per week</p>
                    </div>
                </a>
                <div className="ResultsCard3">
                    <img className="CardImg3" src={require('../images/property8-3.jpg')} alt=''></img>
                    <img className="BedImg" src={require('../images/bedrooms.png')} alt=''></img> <p className="BedNum">3</p>
                    <img className="BathImg" src={require('../images/bathroom.png')} alt=''></img> <p className="BathNum">2</p>
                    <img className="PetImg" src={require('../images/pets.png')} alt=''></img>
                    <p className="SearchCardTitle">Mission Bay</p>
                    <p className="SearchCardRent">$920 per week</p>
                </div>
            </div>
        </div>
    );
}
export default SearchPage;