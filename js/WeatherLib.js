let stationsList = [];

function processXML(xmlDoc) {
    let stationsXML = xmlDoc.getElementsByTagName("station");

    for (x = 0; x < stationsXML.length; x++) {
        let stationXML = stationsXML[x];

        // Create the parallel object list.

        // Build the string for the <station> children.
        let station_idXML = stationsXML[x].getElementsByTagName("station_id")[0].innerHTML;
        let stateXML = stationsXML[x].getElementsByTagName("state")[0].innerHTML;
        let station_nameXML = stationsXML[x].getElementsByTagName("station_name")[0].innerHTML;
        let latitudeXML = stationsXML[x].getElementsByTagName("latitude")[0].innerHTML;
        let longitudeXML = stationsXML[x].getElementsByTagName("longitude")[0].innerHTML;
        let xml_urlXML = stationsXML[x].getElementsByTagName("xml_url")[0].innerHTML;

        let station = {
            stationid: station_idXML,
            state: stateXML,
            stationName: station_nameXML,
            latitude: latitudeXML,
            longitude: longitudeXML,
            xmlURL: xml_urlXML
        };            
        stationsList.push(station);
    }
}

function getStations(state) {
    let returnList = null;
    returnList = stationsList.filter(function (o) { return o.state == state });
    return (returnList);
}

function getStation(stationid) {
    let returnStation = null;
    returnStation = stationList.find(function (o) { return o.stationid = stationid });
    return (returnStation);
}


function displayStationsList(stationsList, divAttach) {
    let uList = document.createElement("ul");
    for (x = 0; x < stationsList.length; x++) {

        let stationid = stationsList[x].stationid;
        let state = stationsList[x].state;
        let station_name = stationsList[x].stationName;
        let xml_url = stationsList[x].xmlURL;

        let listItem = stationid + " (" + state + ") - " + station_name;

        let liCurrent = document.createElement("li");
        liCurrent.innerHTML = listItem;
        uList.appendChild(liCurrent);
    }
    removeAllChildren(divAttach);
    divAttach.appendChild(uList);

}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// 0 10 20 30