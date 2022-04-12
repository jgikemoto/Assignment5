let stationsList = [];

function processXML(xmlDoc) {
    let stationsXML = xmlDoc.getElementsByTagName("station");

    for (x = 0; x < stationsXML.length; x++) {

        // Create the parallel object list.
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
    returnList = stationsList.filter(
        function (o) { return o.state == state });
    return (returnList);
}

let _hiddenState = null;

function getStations2(state) {
    let returnList = null;
    _hiddenState = state;
    returnList = stationsList.filter(isSameState);
    return (returnList);
}

function isSameState(obj)
{
    let match = obj.state == _hiddenState
    return (match);
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
        let listItem = stationid + " (" + state + ") - " + station_name;

        let liCurrent = document.createElement("li");
        liCurrent.innerHTML = listItem;
        uList.appendChild(liCurrent);
    }
    removeAllChildren(divAttach);
    divAttach.appendChild(uList);
}

function createTableHeader(tblArg) {
    let hdrRow = tblArg.insertRow();
    let cellStationId = hdrRow.insertCell();
    cellStationId.appendChild(document.createTextNode("Station Id"));
    hdrRow.appendChild(cellStationId)

    let cellStationName = hdrRow.insertCell();
    cellStationName.appendChild(document.createTextNode("Station Name"));
    hdrRow.appendChild(cellStationName);

    let latitudeXML = stationsXML[x].getElementsByTagName("latitude")[0].innerHTML;
    latitude: latitudeXML
    let longitudeXML = stationsXML[x].getElementsByTagName("longitude")[0].innerHTML;
    longitude: longitudeXML
}

function createTableRow(tblArg, stationIdArg, stationNameArg, stationStateArg) {
    let curRow = tblArg.insertRow();

    let cellStationId = curRow.insertCell();
    cellStationId.appendChild(document.createTextNode(stationIdArg));
    curRow.appendChild(cellStationId);

    let cellStationName = curRow.insertCell();
    cellStationName.appendChild(document.createTextNode(stationNameArg));
    curRow.appendChild(cellStationName);

    let cellStationState = curRow.insertCell();
    cellStationState.appendChild(document.createTextNode(stationStateArg));
    curRow.appendChild(cellStationState);

    let latitudeXML = stationsXML[x].getElementsByTagName("latitude")[0].innerHTML;
    latitude: latitudeXML
    let longitudeXML = stationsXML[x].getElementsByTagName("longitude")[0].innerHTML;
    longitude: longitudeXML

function displayStationTable(stationsList, divAttach) {
    let uTable = document.createElement("table");
    createTableHeader(uTable);
    divAttach.appendChild(uTable);

    for (x = 0; x < stationsList.length; x++) {
        createTableRow(uTable,
            stationsList[x].stationid,
            stationsList[x].stationName,
            stationsList[x].state);
    }
}

// 50 60 70 80 90 100