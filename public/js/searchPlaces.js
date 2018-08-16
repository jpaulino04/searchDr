

class searchPlaces {
  constructor(place){
    this.api_key = 'AIzaSyBB7AWuOT9mWC7DiUu1H3vD3B5jxxBR-Lk';
    this.api_url = `https://maps.googleapis.com/maps/api/geocode/json?address=${place}&key=${this.api_key}`
    this.app_id = 'tBXXIPDGK5hHRlloWi2z';
    this.app_code = 'DRAyW6wfhjGmCdo0tQXSBw';
    this.rad = 3000;
  }
  


  //Get lat and lng from google
  async getLocation(){
    const response = await fetch(this.api_url);    
    const res = await response.json();    
    const loc_res = res.results[0].geometry.location
    const res_location = `${loc_res.lat},${loc_res.lng}`
    console.log("location from Google: "+res_location)
    return res_location;
  }


  /////////////////////////////////////////////////////////////////////SearchDr
  //Use the developer.here api
  searchDr(loc, text){
    const platform = new H.service.Platform({
      app_id: 'tBXXIPDGK5hHRlloWi2z',
      app_code: 'DRAyW6wfhjGmCdo0tQXSBw' 
    })
    
    // Obtain an Explore object through which to submit search
    // requests:
    var search = new H.places.Search(platform.getPlacesService()),searchResult, error;
      // Define search parameters:
      var params = {
        // Plain text search for places with the word "hotel"
        'q': 'resort',
        //  Search in dr:
        'at': loc
      };
  
      // Define a callback function to handle data on success:
      function onResult(data) {
        //init ui
        const ui = new UI;
        searchResult = data.results.items;
        console.log(text)
        if(text == 'showResults'){
          ui.showResults(searchResult)
        } else if(text == 'showDetails'){
          ui.showDetails(searchResult);
        }        
      }
  
      // Define a callback function to handle errors:
      function onError(data) {
        error = data;
        console.log(error)
      }
  
      search.request(params, {}, onResult, onError) 
  
  }
  
  
}





