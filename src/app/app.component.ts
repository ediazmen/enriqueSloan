import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public counter: number;
  public newRA: number;
  public newDEC: number;


  rename(name, tester) {
    //console.log(name)
    //console.log(tester[0].name)
    for (var i = 0; i < tester.length; i++) {
      if (name == tester[i].name) {
        this.counter = 1.0;
        this.newRA = tester[i].ra
        this.newDEC = tester[i].dec;
        break;
      }
    }
  }
  get imageUrl() {
    return "http://skyservice.pha.jhu.edu/dr1/ImgCutout/getjpeg.aspx?ra=" + this.newRA + "&dec=" + this.newDEC + "&scale=" + this.counter + "&width=500&height=500&opt=GST&query=SR(10,20)"
  }
  //this.workingURL.emit(this.imageUrl)


  onUpdate(id, name, info, ra, dec, imageUrl) {
    this.mail.update(id, name, info, ra, dec)

  }

  constructor( @Inject('mail') public mail) {
    this.counter = 0.5;
    this.newRA = 184.483;
    this.newDEC = -0.436;
  }
}
