import { Component } from '@angular/core';
import { PublishService } from '../../services/publish.service'

interface Kmform {
  id: string;
  status: number;
  text: string;
  title: string;
}

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent {
  public listOfData: Kmform[] = [];
  public loadingTbl: boolean = false;

  constructor(
    private sc: PublishService
  ) { }

  onLoadData(): void {
    this.loadingTbl = true
    this.sc.list({ 'keyword': 1 }).subscribe((output: any) => {
      this.listOfData = output;
      this.loadingTbl = false
      console.log(this.listOfData);
    });
  }

  ngOnInit(): void {
    this.onLoadData()
  }

}
