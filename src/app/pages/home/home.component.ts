import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { BoardGameDTO, BoardGameService } from "../../services/board-game.service";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  game: any;
  hotGames: BoardGameDTO[] = [];

  constructor(private boardGameService: BoardGameService) {}

  ngOnInit(){
    this.boardGameService.getGameById('174430').subscribe({
      next: (data) => {
        console.log('Données reçues du back : ', data);
        this.game = data;
      },
      error: (err) => {
        console.error('Erreur lors de la recuperation du jeu', err)
      }
    });
    this.boardGameService.getHotGames().subscribe({
      next: (data) => {
        console.log('Données reçues du back pour les jeux populaires : ', data);
        this.hotGames = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des jeux populaires', err);
      }
    });
  }
}

