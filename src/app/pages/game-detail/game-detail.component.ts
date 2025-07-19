import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { BoardGameService } from '../../services/board-game.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent implements OnInit {
  game: any;

  constructor(private route: ActivatedRoute ,private boardGameService: BoardGameService) {}

  ngOnInit() {
    const gameId = this.route.snapshot.paramMap.get('id');
    if (gameId) {
      this.boardGameService.getGameById(gameId).subscribe({
        next: (data) => {
          console.log('Données reçues du back : ', data);
          this.game = data;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du jeu', err);
        }
      });
    }
  }

}
