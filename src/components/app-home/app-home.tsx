import { Component, h, Prop } from '@stencil/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

const CLIENT_TOKEN = "9ad59e3ab77d46809ddf0fc775de4e51";

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @Prop() AICLient: any;
  @Prop() question: string;
  @Prop() answer:   string;

  componentDidLoad(){
    this.AICLient = new ApiAiClient({accessToken: CLIENT_TOKEN});
  }

  sendMessage() {
    let text = document.querySelector('input').value;
    document.querySelector('input').value = '';

    this.AICLient.textRequest(text).then((response) => {
     this.answer = response.result.fulfillment.speech;
     console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

      <ion-input placeholder="Ask me what time is it">
            </ion-input>
            <ion-button onClick={() => this.sendMessage()}>
              Send
            </ion-button>
            <p>{this.answer}</p>
      </ion-content>
      
    ];
  }
}
