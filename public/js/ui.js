class UI {
  constructor(){
    this.places = document.getElementById('places');
  }

///////////////////////////////////////////////////////////////Show Places
  //Get data from searchPlaces.getLocationa 
  //Show data in ui
  showResults(data){
    //init search places
    const details = new searchPlaces;
    console.log(data)
    const card = document.createElement('div')
    card.className = 'card card-body bg-secondary';
    data.forEach((place, idx) => {      
      card.innerHTML += `
        <h1 class='text-center py-2 my-2 bg-light'>${idx+1}: ${place.title}</h1>
        <button class='btn btn-lg btn-warning details'><a id='link'>See Details</a></button>    
        <hr>
      `
    })
    this.places.appendChild(card)
  }


  ///////////////////////////////////////////////////////////////Show Details
   //Get data from searchPlaces.getLocationa 
  //Show data in ui
  showDetails(data){
    //init search places  
    console.log(data)
    
  }

  


}
