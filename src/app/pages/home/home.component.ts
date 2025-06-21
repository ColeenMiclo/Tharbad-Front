import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BoardGameDTO, BoardGameService } from "../../services/board-game.service";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  game: any;

  constructor(private boardGameService: BoardGameService) {}

  ngOnInit(){
    this.boardGameService.getGameById('174430').subscribe({
      next: (data) => {
        console.log('Donnees recues du back : ', data);
        this.game = data;
      },
      error: (err) => {
        console.error('Erreur lors de la recuperation du jeu', err)
      }
    });
  }
}

