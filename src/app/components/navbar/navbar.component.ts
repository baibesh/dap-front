import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { TuiAvatarModule } from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [CommonModule, TuiButtonModule, RouterLink, TuiAvatarModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {}
