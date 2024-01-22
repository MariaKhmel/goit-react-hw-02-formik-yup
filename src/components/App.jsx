import { Component } from 'react';
import { LoginForm } from './LoginForm/LoginForm'
import {ProductReviewForm} from './ProductReviewFrom/ProductReviewForm'


export class App extends Component {
  render() {
    return (
      <>
        <ProductReviewForm/>
    {/* <LoginForm/> */}
      </>
    );
  }
}
