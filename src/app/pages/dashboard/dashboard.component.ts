import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {
  room1 = false;
  room2 = false;
  room3 = true;
  room4 = false;
  private alive = true;

  lightCard: CardSettings = {
    title: 'Light',
    iconClass: 'nb-lightbulb',
    type: 'primary',
  };
  rollerShadesCard: CardSettings = {
    title: 'Roller Shades',
    iconClass: 'nb-roller-shades',
    type: 'success',
  };
  wirelessAudioCard: CardSettings = {
    title: 'Wireless Audio',
    iconClass: 'nb-audio',
    type: 'info',
  };
  coffeeMakerCard: CardSettings = {
    title: 'Coffee Maker',
    iconClass: 'nb-coffee-maker',
    type: 'warning',
  };

  statusCards1: string;
  statusCards2: string;
  statusCards3: string;
  statusCards4: string;

  commonStatusCardsSet1: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard,
    this.coffeeMakerCard,
  ];
  commonStatusCardsSet2: CardSettings[] = [
    this.lightCard,
    this.coffeeMakerCard,
  ];
  commonStatusCardsSet3: CardSettings[] = [
    this.lightCard,
    this.rollerShadesCard,
    this.wirelessAudioCard
  ];
  commonStatusCardsSet4: CardSettings[] = [
    this.wirelessAudioCard,
    this.rollerShadesCard,
    this.lightCard,
    this.coffeeMakerCard,
    this.wirelessAudioCard,
    this.rollerShadesCard,
  ];

  statusCardsByThemes1: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet1,
    cosmic: this.commonStatusCardsSet1,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };

  statusCardsByThemes2: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet2,
    cosmic: this.commonStatusCardsSet2,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };

  statusCardsByThemes3: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet3,
    cosmic: this.commonStatusCardsSet3,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };

  statusCardsByThemes4: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
  } = {
    default: this.commonStatusCardsSet4,
    cosmic: this.commonStatusCardsSet4,
    corporate: [
      {
        ...this.lightCard,
        type: 'warning',
      },
      {
        ...this.rollerShadesCard,
        type: 'primary',
      },
      {
        ...this.wirelessAudioCard,
        type: 'danger',
      },
      {
        ...this.coffeeMakerCard,
        type: 'secondary',
      },
    ],
  };

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards1 = this.statusCardsByThemes1[theme.name];
        this.statusCards2 = this.statusCardsByThemes2[theme.name];
        this.statusCards3 = this.statusCardsByThemes3[theme.name];
        this.statusCards4 = this.statusCardsByThemes4[theme.name];
    });
  }
roomSwitcher(roomNumber) {
if(roomNumber == 0) {
  this.room1 = true;
  this.room2 = false;
  this.room3 = false;
  this.room4 = false;
}  if (roomNumber == 1) {
  this.room2 = true;
  this.room1 = false;
  this.room3 = false;
  this.room4 = false;
}  if (roomNumber == 2) {
  this.room3 = true;
  this.room1 = false;
  this.room2 = false;
  this.room4 = false;
}  if (roomNumber == 3) {
  this.room4 = true;
  this.room1 = false;
  this.room2 = false;
  this.room3 = false;
}
}
  ngOnDestroy() {
    this.alive = false;
  }
}
