import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-generals-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {

  ngOnInit(): void {
  }
}
