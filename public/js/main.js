const search = document.getElementById('searchInput');
const btn = document.getElementById('places')
let myEvent;
search.addEventListener('keyup', (e) => {  
  myEvent = e;
  //init ui
  const ui = new UI;
  const str =  e.target.value.toString(); 
  const loc = str.replace(/\s/g, "&");        
    if(e.keyCode == '13'){
      search.value ='';         
      //init searchPlaces: 
      const findPlaces = new searchPlaces(loc); 
      findPlaces.getLocation(loc)
        .then((data) => {
          const resLoc =  data.toString()
          findPlaces.searchDr(resLoc, 'showResults');
        })
      
      
    }
    
  e.preventDefault();
})

btn.addEventListener('click', function(e){
  if(e.target.parentElement.classList.contains('details')){
    //init ui
      const ui = new UI;
      const str =  myEvent.target.value.toString(); 
      const loc = str.replace(/\s/g, "&");  
          
      //init searchPlaces: 
      const findPlaces = new searchPlaces(loc); 
      findPlaces.getLocation(loc)
        .then((data) => {
          const resLoc =  data.toString()
          findPlaces.searchDr(resLoc, 'showDetails');
        })
  }


})
