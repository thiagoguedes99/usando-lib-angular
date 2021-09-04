import { Component } from '@angular/core';

// import './assets/sass/main.scss';
// import '../assets/sass/main.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';

  myThead = [
    'Sigla',
    'Score',
  ]

  myBody = [
    ['ABC', '0.2'],
    ['ABC', '0.2'],
    ['ABC', '0.2'],
  ]

  // testStyle = { paddingRight: '10px' }
  // marginBottom = { marginBottom: '32px' }
  // marginBottom16 = { marginBottom: '16px' }
  marginTop = { marginTop: '64px' }

  fix = { marginBottom: '32px', position: 'sticky', top: '10px' }

  styleCard = {
    padding: '18px',
    textAlign: 'center'
  }

  styleCardMiddle = {
    ...this.styleCard,
    borderRadius: '0px'
  }

  styleCardSide = {
    ...this.styleCard
  }

}
