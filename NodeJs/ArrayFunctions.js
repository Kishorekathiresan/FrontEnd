countries=["India","US","Canada","Australia","Japan"];
capitals=["New Delhi","Washington","Ottawa","Canberra","Tokyo"];

function getCapitals(country){
    for(i in countries){
        if(countries[i]==country){
            return capitals[i];
        }
    }
    return "Country does not exist";
}
module.exports.getCapCity=getCapitals;