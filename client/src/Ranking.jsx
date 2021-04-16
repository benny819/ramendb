import React from 'react';

const Ranking = ({shopData, clickShop}) =>{
  const topFive = shopData.slice(0,5);
  const renderRating = (shop) => {
    console.log(shop)
    let sum = 0;
    let counter = 0;
    if(shop.reviews.length === 0){
      return shop.rating;
    }else{
      for(let i=0;i<shop.reviews.length;i++){
        sum += Number(shop.reviews[i].score);
        counter ++;
      }
      console.log(sum);
      return Math.floor(sum/counter);
    }
  }

  return(
    <div>
      {topFive.map( (shop,index)=>(
        <div>
          <div onClick={(e) =>{clickShop(e,index)}} >{index+1}. {shop.name}</div>
          <div>rating: {shop.rating}</div>
        </div>
      ))}
    </div>
  )
}

export default Ranking;