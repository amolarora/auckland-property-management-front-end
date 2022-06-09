import DetailsSlider from "./DetailsSlider";

function DetailsPage () {
    const xhr = new XMLHttpRequest();

    //function getAnswer() {
        xhr.onload = function() {
            const res = JSON.parse(this.responseText);
            //console.log(res);
            //const address = res[9].address.street + ", " + res[9].address.suburb + ", " + res[9].address.city
            document.getElementById("PropertyAddress").innerHTML = res[8].address.street + ", " + res[8].address.suburb + ", " + res[8].address.city;
            document.getElementById("PropertyRent").innerHTML = "$" + res[8].weekly_rent + " per week";
            document.getElementById("NumOfBedrooms").innerHTML = res[8].rooms.bedrooms;
            document.getElementById("NumOfBathrooms").innerHTML = res[8].rooms.bathrooms;
            
            document.getElementById("Availability").innerHTML = res[8].available_from;
            document.getElementById("Tenents").innerHTML = res[8].tenents;
            document.getElementById("Smoking").innerHTML = res[8].smoking;
            document.getElementById("Pets").innerHTML = res[8].pets;
            
            document.getElementById("AgentName").innerHTML = res[8].agent_details.agent_name;
            document.getElementById("PhoneNum").innerHTML = res[8].agent_details.agent_phone;
            document.getElementById("EmailAddress").innerHTML = res[8].agent_details.agent_email;

            document.getElementById("PropertyDescription").innerHTML = res[8].description;
        }

        xhr.open('GET', 'http://localhost:8989/', true);
        xhr.send();
    //}

    //console.log(getAnswer());


    return (
        <div className="DetailsContent">
            <DetailsSlider />
            <div className="MoreImages">
                <img className="DetailsImage1" src={require('../images/property10-1.jpg')} alt=''></img>
                <img className="DetailsImage2" src={require('../images/property10-2.jpg')} alt=''></img>
                <img className="DetailsImage3" src={require('../images/property10-3.jpg')} alt=''></img>
                <img className="DetailsImage4" src={require('../images/property10-4.jpg')} alt=''></img>
                <img className="DetailsImage5" src={require('../images/property10-5.jpg')} alt=''></img>
                <img className="DetailsImage6" src={require('../images/property10-6.jpg')} alt=''></img>
            </div>

            <div className="DetailsRightSide">
                <div className="SideImage1"> <img src={require('../images/3Dview.png')} alt=''></img><p className="text360">360</p></div>
                <img className="SideImage2" src={require('../images/property2-9.jpg')} alt=''></img>
            </div>

            <div className="PropertyDetails">
                <h1 id="PropertyAddress"> </h1>
                <h1 id="PropertyRent"> </h1>

                <img className="DetailsBedImg" src={require('../images/bedrooms.png')} alt=''></img ><p id="NumOfBedrooms"></p>
                <img className="DetailsBathImg" src={require('../images/bathroom.png')} alt=''></img><p id="NumOfBathrooms"></p>

                <div className="AboutProperty">
                    <div className="AboutLabels">
                        <p>Availability <br></br><br></br>
                            Tenents <br></br><br></br>
                            Smoking <br></br><br></br>
                            Pets
                        </p>
                    </div>
                    <div className="AboutDetails">
                            <p id='Availability'></p>
                            <p id='Tenents'></p>
                            <p id='Smoking'></p>
                            <p id='Pets'></p>
                    </div>
                </div>
            </div>
            <div className="AgentDetails">
                <img className='AgentImg' src={require('../images/CarolineLi.png')} alt=''></img>
                <p id='AgentName'></p>
                <img className='PhoneImg' src={require('../images/phone.png')} alt=''></img><p id="PhoneNum"></p>
                <img className='EmailImg' src={require('../images/email.png')} alt=''></img><p id="EmailAddress"></p>
                <button type="button" className="BookingButton"><p>Book a Viewing</p></button>
            </div>

            <div className="PropertyDescription">
                <p id="PropertyDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>

            <iframe className='PropertyMap' src="https://my.atlistmaps.com/map/bd53075c-c4fc-4453-907b-8a57c7abc704?share=true" allow="geolocation" width="1200px" height="725px" frameborder="0" scrolling="no" title="PropertyMap" allowfullscreen></iframe>
        </div>
    );
}

export default DetailsPage