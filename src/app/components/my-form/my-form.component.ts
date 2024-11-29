import { Component, OnInit } from '@angular/core';
// import { VoiceRecognitionService } from './../../voice-recognition.service';

@Component({
	selector: 'app-my-form',
	templateUrl: './my-form.component.html', styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
		// name: string = '';
 ngOnInit() { }
	// constructor(private voiceRecognitionService: VoiceRecognitionService) { }
	/* startVoiceRecognition() {
		this.voiceRecognitionService.startRecognition()
		.subscribe(result => {
			this.name = result;
		});
	} */
}
