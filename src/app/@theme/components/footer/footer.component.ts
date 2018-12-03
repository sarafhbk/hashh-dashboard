import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Akveo <b><a href="https://hashh.io" target="_blank">Hashh Automations</a></b> 2017</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-instagram"></a>
    </div>
  `,
})
export class FooterComponent {
}
