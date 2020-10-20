import { Component } from '@angular/core';
import { MemberService } from '../../services/member.service'

interface Member {
  id: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html'
})

export class MemberComponent {
  public listOfData: Member[] = [];
  public visible: boolean = false
  public loadingTbl: boolean = false;
  public fMember: any = {
    id: '',
    name: '',
    emial: '',
    address: ''
  }


  constructor(
    private sc: MemberService
  ) { }

  onAddNew(): void {
    this.visible = true
  }

  onSaveData(): void {
    if (this.fMember.id != '') {
      this.sc.update({
        id: this.fMember.id,
        name: this.fMember.name,
        age: this.fMember.age,
        address: this.fMember.address
      }).subscribe((output: any) => {
        alert(output.message)
        this.onClose()
        this.onLoadData()
      });
    } else {
      this.sc.add({
        name: this.fMember.name,
        age: this.fMember.age,
        address: this.fMember.address
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
    this.fMember.id = ''
    this.fMember.name = ''
    this.fMember.age = ''
    this.fMember.address = ''
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
    this.fMember.id = data.id
    this.fMember.name = data.name
    this.fMember.age = data.age
    this.fMember.address = data.address
  }

  onEditProses() {
    this.sc.update(this.fMember).subscribe((output: any) => {
      alert(output.message)
      this.onLoadData()
    });
  }

  ngOnInit(): void {
    this.onLoadData()
  }
}