/* Array.prototype.map - Exercise 3

* FAIR WARNING: this one is harder than the two others!
* Write the CONTENTS of the `getMoviesFreshness` function
* It receives an array of OBJECTS representing movies
* Each "movie" object has two properties:
   * `name` name of the movie
   * `rating` the average rating it's been given on rottentomatoes.com
* `getMoviesFreshness` must return an array containing the objects of the input array, EACH
  having a new property. The KEY of this new property should be `label`, and the associated VALUE
  should be a string, which depends on the `rating` property:
  * If `rating` is STRICTLY below 60, the value to assign to `label` is "rotten".
  * If `rating` is between 60 and 75 (included), the value to assign to `label` is "fresh".
  * If `rating` STRICTLY above 75, the value to assign to `label` is "certified fresh".
* You might need a refresher on how to manipulate object literals:
  https://www.dyn-web.com/tutorials/object-literal/properties.php

Sample movies array, i.e. INPUT:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]

Expected OUTPUT for this sample:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      label: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      label: 'rotten'
    },
    {
      name: 'Leave No Trace',
      rating: 100,
      label: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      label: 'fresh'
    }
  ]

 */



const myMovies = [
  {
    name: 'Crazy Rich Asians',
    rating: 93
  },
  {
    name: 'Skyscraper',
    rating: 46
  },
  {
    name: 'Leave No Trace',
    rating: 100
  },
  {
    name: 'White Boy Rick',
    rating: 60
  }
]

/* function getMoviesFreshness(movies) {

  const newKey = movies.map(addKey => {
  
    if( addKey.rating < 60){
  
      return addKey.label = 'rotten';
  
    }else if (addKey.rating > 75){
  
      return addKey.label = 'fresh';
    
    }else if (addKey.rating >= 60 && addKey.rating <= 75){
  
      return addKey.label = 'certified fresh';
    }
  }
  )
} */
//console.log(myMovies.label)
//console.log(myMovies[1].rating < 60);
//console.log(myMovies.map(under60 => under60.rating < 60 ? true : false));



function getMoviesFreshness(myArrayWithObject){


  const testFunct = myArrayWithObject => {if( myArrayWithObject.rating < 60){

    myArrayWithObject.label = 'rotten';

  }else if (myArrayWithObject.rating > 75){

    myArrayWithObject.label = 'certified fresh';
  
  }else/* (myArrayWithObject.rating >= 60 && myArrayWithObject.rating < 75) */{

    myArrayWithObject.label = 'fresh';
  }}

  return myArrayWithObject.map(testFunct)
   
}



//console.log(newKey , "test newKey");
console.log(myMovies, "test myMovies");
//console.log(myMovies.map(getMoviesFreshness), "final expected");
console.log(getMoviesFreshness, "final");


// DON'T TOUCH THIS!
module.exports = getMoviesFreshness;
