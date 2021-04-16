import React from 'react';
import Form from './Form.jsx';
import Ranking from './Ranking.jsx';
import SingleShop from './SingleShop.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shop: [],
      location: "",
      view: 'main',
      currentShop: {},
      ramen: '',
      type: 'Ramen',
      soup: 'tonkotsu',
      score: '100',
      comment: ''
    }

    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.clickShop = this.clickShop.bind(this);
    this.titleClick = this.titleClick.bind(this);
    this.addReviewButton = this.addReviewButton.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.formchangehandle = this.formchangehandle.bind(this);
    this.getData = this.getData.bind(this);
  }

  submitHandle(e){
    e.preventDefault();
    let obj = {
      id: this.state.currentShop._id,
      ramen: this.state.ramen,
      type: this.state.type,
      soup: this.state.soup,
      score: this.state.score,
      comment: this.state.comment
    }
    axios.post(`http://localhost:3000/api/place/`, obj)
    .then(() => this.getData())
    .then(() => this.changeView('main'))
    .catch((e) => console.log("error on post: "+e))
  }

  formchangehandle(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clickShop(e, index){
    let shop = this.state.shop[index];
    this.setState({
      view: "single",
      currentShop: shop
    })
  }

  titleClick(){
    this.changeView('main');
  }

  changeView(option){
    this.setState({
      view: option
    });
  }

  addReviewButton(e){
    this.changeView("form")
  }

  renderView(){
    const {view} = this.state;
    if(view === 'main'){
      return <Ranking shopData={this.state.shop} clickShop={this.clickShop}/>
    }else if(view === 'form'){
      return <Form submitHandle={this.submitHandle} formchangehandle={this.formchangehandle}/>
    }
    else {
      return <SingleShop current={this.state.currentShop} addReviewButton={this.addReviewButton}/>
    }
  }

  getData(){
    axios.get('http://localhost:3000/api/place')
    .then( res => {
      let shopData = res.data;
      for(var i=0; i<shopData.length;i++){
        let sum = 0;
        let counter = 0;
        if(shopData[i].reviews.length !== 0){
          for(let j=0;j<shopData[i].reviews.length;j++){
            sum += Number(shopData[i].reviews[j].score);
            counter ++;
          }
          shopData[i].rating = Math.floor(sum/counter).toString();
        }

      }
      console.log(shopData);
      shopData.sort((a,b) => {
        return b.rating-a.rating;
      });
      console.log(shopData);
      this.setState({
        shop: shopData
      })
    })
  }

  componentDidMount(){
    this.getData();
  }


  render(){
    return(
      <div>
        <h1 onClick={()=>{this.titleClick()}}>Ramen Database</h1>
        {this.renderView()}
      </div>

    )
  }
}

export default App;