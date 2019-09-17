

window.onload = function () {
    getTable("list");
    document.querySelector("#menu_21").onclick = function () { getTable("populationquery1"); };
     document.querySelector("#menu_22").onclick = function () { getTable("populationquery2"); };
     document.querySelector("#menu_31").onclick = function () { getTable("area&continent"); };
     document.querySelector("#menu_32").onclick = function () { getTable("asia"); };
    
 }
 
 function getTable(option) {
 
    var countrytbl = document.querySelector("#outputTable");

    var title = document.querySelector("#subtitle");

    var tablesInfo = countrytbl.querySelector("tbody");

    if (tablesInfo)
        countrytbl.removeChild(tablesInfo);
    
    var tableInfo = document.createElement("tbody");

    for (var i = 0; i < countries.length; i++) {
        switch (option) {
            case "list":
                title.innerHTML = "List of Countries and Dependencies";
                tableInfo.appendChild(DataInfo("English", i));                
                break;
            case "populationquery1":
                title.innerHTML = "List of Countries and Dependencies - Population greater than 100 million";
                if (countries[i].Population > 100000000)
                tableInfo.appendChild(DataInfo("English", i));
                break;
            case "area&continent":
                title.innerHTML = "List of Countries and Dependencies - Area greater than 1 million Km2, Americas";
                if (countries[i].AreaInKm2 > 1000000 && countries[i].Continent == "Americas")
                tableInfo.appendChild(DataInfo("English", i));
                break;
            case "asia":
                title.innerHTML = "List of Countries and Dependencies - All countries in Asia";
                if (countries[i].Continent == "Asia")
                tableInfo.appendChild(DataInfo("English", i));

            case "populationquery2":
                title.innerHTML = "List of Countries and Dependencies - Population between 1 and 2 million";
                if (countries[i].Population > 1000000 && countries[i].Population < 2000000)
                tableInfo.appendChild(DataInfo("English", i));
                break;
        
        }

    }
    countrytbl.appendChild(tableInfo);
 }
 
 
 
 function getImgElement(code) {
 
     var flagtag = document.createElement("td");
     var flagimg = document.createElement("img");
     var text = "flags/" + code + ".png";
     flagimg.src = text;
     flagtag.appendChild(flagimg);
     return flagtag;
 }
 
 
 function getInfo(text) {
     var newinfo= document.createElement("td");
     var newtext = document.createTextNode(text);
     newinfo.appendChild(newtext);
     return newinfo;
 }
 
 function DataInfo(country, i) {
 
    var DataInfo = document.createElement("tr");
    DataInfo.appendChild(getImgElement(countries[i].Code));
    DataInfo.appendChild(getInfo(countries[i].Code));
    DataInfo.appendChild(getInfo(countries[i].Name[country]));
    DataInfo.appendChild(getInfo(countries[i].Continent));
    DataInfo.appendChild(getInfo(countries[i].AreaInKm2));
    DataInfo.appendChild(getInfo(countries[i].Population));
    DataInfo.appendChild(getInfo(countries[i].Capital));
    return DataInfo;
}
 
 