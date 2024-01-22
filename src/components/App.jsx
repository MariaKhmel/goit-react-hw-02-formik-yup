import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { LoginForm } from './LoginForm/LoginForm'
import {ProductReviewForm} from './ProductReviewFrom/ProductReviewForm'
import stickers from '../stickers.json'
import {StickerList} from './StickerList'


 const SelectedLabel = ({text}) => {
   return (
        <h1>{text}</h1>
     )
}


export class App extends Component {

  state = {
    selectedStickerLabel : null,
  }

  displaySelectedStickerlable = (label) => {
    this.setState({selectedStickerLabel:label})
  }

 
  render() {
 
    return (
      <>
        {/* <ProductReviewForm/> */}
        {/* <LoginForm/> */}


        <SelectedLabel text={this.state.selectedStickerLabel}/> 
        <StickerList stickers={stickers}
          onSelect={this.displaySelectedStickerlable} />
        <GlobalStyle />
      </>
    );
  }
}
