import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://via.placeholder.com/150";
    this.description = "This is a card";
    this.link = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card{
        background-color: gray;
        width: 350px;
        border: 3px solid black;
        padding: 8px;
        margin: 8px;
      }
      .fancy{
        background-color: yellow;
      }
      #card-list {
        display: flex;
      }
      #details {
        width: 100%; 
        padding: 20px;
        color: black;
        border-radius: 0;
        border-color: black;
        border-width: 5px;
        font-size: 16px;
        font-weight: bold;
        margin: 0;  
      }
      #details:active{
        color: red !important;
      }
      #details:focus,
      #details:hover{
        color: black;
        background-color: gold;
      }
      .card-image {
        width: 100%; 
        max-width: 300px; 
        height: 300px; 
        display: block;
        margin: 10px auto;
        
      }
      .card-text {
        margin: 0px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center; 
      }
      .card-body{
        margin: 10px;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img class="card-image" src="${this.image}" alt="${this.title}" />
        <div class="card-text">
          <h1 class="card-title">${this.title}</h1>
          <div class="card-body">
            <p>${this.description}</p>
            <button id="details" @click="${() => window.location.href = this.link}">Details</button>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
