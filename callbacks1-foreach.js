function findWaldo(arr, found) {
    //for (var i = 0; i < arr.length; i++) {
    arr.forEach(function(i){
      if (i === "Waldo") {
          var place = arr.indexOf(i)
        found(place);   // execute callback
      }
    });
  }
  function actionWhenFound(place) {
    console.log("Found Waldo at index " + place + "!");  
  }
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);