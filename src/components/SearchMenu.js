function SearchMenu() {
    return (
        <div className="SearchMenu">
            <a href="/" className="categories" id="Rental">Rental</a>
            <a href="/" className="categories">Holiday</a>
            <a href="/" className="categories">Comercial</a><br></br><br></br><br></br>

            <h2 className="Location">Location</h2><br></br><br></br>

            <form>
                <div className="Labels">
                    <label for="District" className="District">District</label>
                    <label for="Suburb" className="Suburb">Suburb</label>
                    <label for="Rent" className="Rent">Rent per week</label>
                    <label for="Rooms" className="Rooms">Rooms</label>
                    <label for="Bathrooms" className="Bathrooms">Bathrooms</label>
                    <label for="PropertyType" className="PropertyType">Property type</label>
                    <label for="Office" className="Office">Office Space</label>
                    <label for="Parking" className="Parking">Parking</label>
                    <label for="Pets" className="Pets">Pets</label>
                </div><br></br>
                
                <div className="Menus">
                    <select id="District" name="District">
                        <option value="Any">Any</option>
                        <option value="Rodney District">Rodney District</option>
                        <option value="North Shore">North Shore</option>
                        <option value="Waitakere">Waitakere</option>
                        <option value="Auckland City">Auckland City</option>
                        <option value="Manukau City">Manukau City</option>
                        <option value="Papakura District">Papakura District</option>
                        <option value="Franklin District">Franklin District</option>
                    </select>

                    <select id="Suburb" name="Suburb">
                        <option value="Any">Any</option>
                        <option value="Auckland City">Auckland City</option>
                        <option value="Birkdale">Birkdale</option>
                        <option value="East Tamaki">East Tamaki</option>
                        <option value="Gulf Harbour">Gulf Harbour</option>
                        <option value="Kingsland">Kingsland</option>
                        <option value="Milford">Milford</option>
                        <option value="Mission Bay">Mission Bay</option>
                        <option value="Mount Roskill">Mount Roskill</option>
                        <option value="New Lynn">New Lynn</option>
                        <option value="Papatoetoe">Papatoetoe</option>
                    </select>

                    <select id="Rent" className="RentMin" name="Rent">
                        <option value="Min">Min</option>
                        <option value="$100">$100</option>
                        <option value="$150">$150</option>
                        <option value="$200">$200</option>
                        <option value="$250">$250</option>
                        <option value="$300">$300</option>
                        <option value="$350">$350</option>
                        <option value="$400">$400</option>
                        <option value="$450">$450</option>
                        <option value="$500">$500</option>
                        <option value="$550">$550</option>
                        <option value="$600">$600</option>
                        <option value="$650">$650</option>
                        <option value="$700">$700</option>
                        <option value="$750">$750</option>
                        <option value="$800">$800</option>
                        <option value="$850">$850</option>
                        <option value="$900">$900</option>
                        <option value="$950">$950</option>
                        <option value="$1000">$1000</option>
                        <option value="$1050">$1050</option>
                        <option value="$1100">$1100</option>
                        <option value="$1150">$1150</option>
                        <option value="$1200">$1200</option>
                        <option value="$1250">$1250</option>
                        <option value="$1300">$1300</option>
                        <option value="$1350">$1350</option>
                        <option value="$1400">$1400</option>
                        <option value="$1450">$1450</option>
                        <option value="$1500">$1500</option>
                    </select>

                    <select id="Rent" className="RentMax" name="Rent">
                        <option value="Max">Max</option>
                        <option value="$100">$100</option>
                        <option value="$150">$150</option>
                        <option value="$200">$200</option>
                        <option value="$250">$250</option>
                        <option value="$300">$300</option>
                        <option value="$350">$350</option>
                        <option value="$400">$400</option>
                        <option value="$450">$450</option>
                        <option value="$500">$500</option>
                        <option value="$550">$550</option>
                        <option value="$600">$600</option>
                        <option value="$650">$650</option>
                        <option value="$700">$700</option>
                        <option value="$750">$750</option>
                        <option value="$800">$800</option>
                        <option value="$850">$850</option>
                        <option value="$900">$900</option>
                        <option value="$950">$950</option>
                        <option value="$1000">$1000</option>
                        <option value="$1050">$1050</option>
                        <option value="$1100">$1100</option>
                        <option value="$1150">$1150</option>
                        <option value="$1200">$1200</option>
                        <option value="$1250">$1250</option>
                        <option value="$1300">$1300</option>
                        <option value="$1350">$1350</option>
                        <option value="$1400">$1400</option>
                        <option value="$1450">$1450</option>
                        <option value="$1500">$1500</option>
                    </select>

                    <select id="Rooms" className="RoomsMin" name="Rooms">
                        <option value="Min">Min</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                    </select>

                    <select id="Rooms" className="RoomsMax" name="Rooms">
                        <option value="Max">Max</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10+">10+</option>
                    </select>

                    <select id="Bathrooms" name="Bathrooms">
                        <option value="Any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                    </select>

                    <select id="PropertyType" name="PropertyType">
                        <option value="Any">Any</option>
                        <option value="House">House</option>
                        <option value="Unit">Unit</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Appartment">Appartment</option>
                    </select>

                    <select id="Office" name="Office">
                        <option value="Any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3+</option>
                    </select>

                    <select id="Parking" name="Parking">
                        <option value="Any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                    </select>

                    <select id="Pet" name="Pet">
                        <option value="Any">Any</option>
                        <option value="Pet Friendly">Pet Friendly</option>
                        <option value="No Pets Allowed">No Pets Allowed</option>
                    </select>
                </div>
            </form>

            <h2 className="Amenities">See amenities</h2>
            <p className="Supermarkets">Supermarkets</p>
            <div className="SupermarketsSwitch">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>

            <p className="Parks">Parks</p>
            <div className="ParksSwitch">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>

            <p className="Schools">Schools</p>
            <div className="SchoolsSwitch">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>

            <p className="Transport">Public Transport</p>
            <div className="TransportSwitch">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                </label>
            </div>

            <p className="VirtualView">Virtual View</p>
            <input type="checkbox" className="VirtualViewBox"/>
        </div>
    );
}

export default SearchMenu;