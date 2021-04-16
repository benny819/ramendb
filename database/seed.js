const axios = require('axios');
const Place = require('./place.js');

const genSample = () => {
  return axios({
    method: 'get',
    url: 'https://developers.zomato.com/api/v2.1/search?entity_id=306&entity_type=city&q=ramen&count=20',
    headers:{
      'user-key':"1ab3123cc5e7fd0bb3c518ab54e39b56"
    }
  })
    .then(response => {
      const shopData = response.data.restaurants;
      let shopArr = [];
      for(let i=0;i<shopData.length;i++){
        let obj = {
          name: shopData[i].restaurant.name,
          rating: (shopData[i].restaurant.user_rating.aggregate_rating) * 20,
          location: shopData[i].restaurant.location.address + "," + shopData[i].restaurant.location.city,
          reviews: []
        }
        shopArr.push(obj);
      }
      return shopArr;
    })
    .catch(e=> console.log("error!: "+ e))
}

const insertSamplePlace = () =>{
  Place.deleteMany()
  .then( () => genSample())
  .then( (data)=>Place.create(data))
  .then( ()=> console.log("completed importing Places sample data"))
  .catch( (err) => console.log("error in gen sample: "+ err))
}

insertSamplePlace();