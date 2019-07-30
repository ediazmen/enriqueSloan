import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    { id: 0, name: "NGC 428", info: "A spectacularly blue nearby spiral galaxy. The blue color indicates very active star formation in this galaxy.", ra: 18.232, dec: 0.981 },
    { id: 1, name: "NGC 0201", info: " Group of galaxies centered on NGC 0201.", ra: 9.895, dec: 0.86 },
    { id: 2, name: "Palomar 5", info: " Globular cluster, which is being torn apart by the Milky Way's gravity.", ra: 229.013, dec: -0.123 },
    { id: 3, name: "M102", info: " Is a lenticular (armless spiral) galaxy. ", ra: 226.62158, dec: 55.76315 },
    { id: 4, name: "NGC2713 ", info: " Spiral galaxy in Hydra with loosely wound arms. ", ra: 134.33544, dec: 2.921312 },
    { id: 5, name: "NGC7108", info: " A faint elliptical galaxy in Aquarius.", ra: 325.473941, dec: -6.708839 },
    { id: 6, name: "NGC7108", info: " Is a flocculent intermediate spiral galaxy located around 26[4] million light-years away from Earth in the constellation Leo", ra: 166.454, dec: -0.036 },
    { id: 7, name: "ARP 240", info: " an interacting pair of galaxies. Note how the galaxies have distorted each other through their mutual gravity.", ra: 204.97, dec: 0.84 },
    { id: 8, name: "UGC 07332", info: "Blue, low surface brightness galaxy.", ra: 184.483, dec: 0.436 },
    { id: 9, name: "NGC 450", info: " Galaxy pair.", ra: 18.876, dec: -0.861 }]

  starChange(id: number, name: string, info: string, ra: number, dec: number) {
    this.messages = this.messages.map(m =>
      m.id === id ? { id, name, info, ra, dec } : m)
  }


  constructor() { }

}
