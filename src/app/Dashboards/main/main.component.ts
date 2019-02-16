import {
	Component,
	OnInit
} from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {
	AwsconfigService
} from '../../Services/awsconfig.service';
import {
	Observable,
} from 'rxjs';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css', './main.component2.css']
})
export class MainComponent implements OnInit {


	constructor(private AwsconfigService: AwsconfigService) {}

	config: boolean;


	ngOnInit() {

		this.AwsconfigService.getconfig().subscribe(config => this.config = config);

	}

//////LATER THIS WILL BE RUNNING EVERY 1 MIN AND FETCHING DATA AND SHOWING DYNAMIC DATA
	noofbuckets() {
		return 12;
	}
	noofusers() {
		return 24;
	}

	noofinstances() {
		return 2;
	}
	noofalarms() {
		return 2;
	}
	noofdatabases() {
		return 6;
	}

}