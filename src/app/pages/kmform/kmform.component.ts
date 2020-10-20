import { Component } from '@angular/core';
import { KmformService } from '../../services/kmform.service'

interface Kmform {
  id: string;
  status: number;
  text: string;
  title: string;
}

@Component({
  selector: 'app-kmform',
  templateUrl: './kmform.component.html'
})

export class KmformComponent {
  public listOfData: Kmform[] = [];
  public visible: boolean = false
  public loadingTbl: boolean = false;
  public fKmform: any = {
    id: '',
    status: 1,
    text: '',
    title: ''
  }


  constructor(
    private sc: KmformService
  ) { }

  onAddNew(): void {
    this.visible = true
  }

  onSaveData(): void {
    if (this.fKmform.id != '') {
      this.sc.update({
        id: this.fKmform.id,
        status: this.fKmform.status,
        text: this.fKmform.text,
        title: this.fKmform.title
      }).subscribe((output: any) => {
        alert(output.message)
        this.onClose()
        this.onLoadData()
      });
    } else {
      console.log(this.fKmform);
      this.sc.add({
        status: this.fKmform.status,
        text: this.fKmform.text,
        title: this.fKmform.title
      }).subscribe((output: any) => {
        alert(output.message)
        this.onClose()
      });
    }

  }

  deleteRow(deletedKey: any): void {
    this.sc.delete({ id: deletedKey.id }).subscribe((output: any) => {
      alert(output.message)

      this.onLoadData()
    });
  }

  onClose(): void {
    this.visible = false
    this.fKmform.id = ''
    this.fKmform.status = ''
    this.fKmform.text = ''
    this.fKmform.title = ''
  }

  onLoadData(): void {
    this.loadingTbl = true
    this.sc.list().subscribe((output: any) => {
      this.listOfData = output;
      this.loadingTbl = false
    });
  }

  onEdit(data: any) {
    this.visible = true
    this.fKmform.id = data.id
    this.fKmform.status = '1'
    this.fKmform.text = data.text
    this.fKmform.title = data.title
  }

  onEditPublish(data: any) {
    this.visible = true
    this.fKmform.id = data.id
    this.fKmform.status = '0'
    this.fKmform.text = data.text
    this.fKmform.title = data.title
  }

  onEditProses() {
    this.sc.update(this.fKmform).subscribe((output: any) => {
      alert(output.message)
      this.onLoadData()
    });
  }



  ngOnInit(): void {
    this.onLoadData()
  }
}