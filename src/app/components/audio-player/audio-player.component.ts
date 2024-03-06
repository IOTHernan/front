import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrl: './audio-player.component.css'
})
export class AudioPlayerComponent {
  mp3FilePath = './../../../assets/media/cheGrallee.mp3';
  reproducirMP3() {
    const audio = new Audio(this.mp3FilePath);
    audio.play();
  }
}
