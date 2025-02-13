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
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([fancy]) .card{
        background-color: blue;
        color: white;
      }
      .card.toggled {
        background-color: red;
        color: blue;
      }
      .card{
        background-color: gray;
        width: 350px;
        border: 3px solid black;
        padding: 8px;
        margin: 8px;
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
        border: 3px solid black;
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
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  

    // put this anywhere on the MyCard class; just above render() is probably good
    openChanged(e) {
      console.log(e.newState);
      if (e.newState === "open") {
        this.fancy = true;
      }
      else {
        this.fancy = false;
      }
    }

  render() {
    return html`
      <div class="card" ?fancy="${this.hasAttribute('fancy')}">
        <div class="card-text">
          <h1 class="card-title">${this.title}</h1>
          <img class="card-image" src="${this.image}" alt="${this.title}" />
          <div class="card-body">
            <!-- put this in your render method where you had details -->
            <details ?open="${this.fancy}" @toggle="${this.openChanged}">
            <summary>Description</summary>
            <div>
              <slot>${this.description}</slot>
            </div>
            <button id="details" @click="${() => window.location.href = this.link}">Details</button>
          </details>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true},
      title: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
