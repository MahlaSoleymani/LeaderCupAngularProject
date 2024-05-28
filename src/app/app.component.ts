import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryService } from './core/http/repository.service';
import { MaterialDesignModule } from './shared/material-design.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SharedModule, HttpClientModule,MaterialDesignModule],
  
  providers:[ 
    { provide: RepositoryService},
  ],

  // providers: [RepositoryService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  title = 'LeaderCup';
}
