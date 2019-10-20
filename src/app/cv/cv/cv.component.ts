import {Component, OnInit, Output} from '@angular/core';
import {Person} from '../../_model/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
   persons: Person[];
   selectedPerson: Person;
  constructor() { }

  ngOnInit() {

    this.persons = [
      new Person(1, 'user1', 'user lastName', 21, '07225126', 'student', '/rotating_card_profile.png'),
      new Person(2, 'foulen', 'ben foulen', 21, '0722555', 'engineer', '/rotating_card_profile2.png')
    ];
  }
  selectPerson(selectedPerson) {
    this.selectedPerson = selectedPerson;
  }

}
