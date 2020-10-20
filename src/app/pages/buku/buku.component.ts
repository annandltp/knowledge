import { Component, OnInit } from '@angular/core';
import { BukuService } from '../../services/buku.service'

interface Buku {
  key: string;
  judul_buku: string;
  pengarang: string;
  penerbit: string;
  tahun_terbit: string;
  sinopsis: string;
}

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {
  public listOfData: Buku[] = [];
  public visible: boolean = false
  public loadingTbl: boolean = false;
  public fBuku: any = {
    key: '',
    judul_buku: '',
    pengarang: '',
    penerbit: '',
    tahun_terbit: '',
    sinopsis: ''
  }

  constructor(
    private sc: BukuService
  ) { }

  onAddNew(): void {
    this.visible = true
  }

  onSaveData(): void {
    this.sc.add({
      judul_buku: this.fBuku.judul_buku,
      pengarang: this.fBuku.pengarang,
      penerbit: this.fBuku.penerbit,
      tahun_terbit: this.fBuku.tahun_terbit,
      sinopsis: this.fBuku.sinopsis
    }).subscribe((output: any) => {
      alert(output.message)
      this.onClose()
    });
  }

  deleteRow(deletedKey: string): void {
    this.listOfData = this.listOfData.filter(d => d.key !== deletedKey);
  }

  onClose(): void {
    this.visible = false
    this.fBuku.key = ''
    this.fBuku.judul_buku = ''
    this.fBuku.pengarang = ''
    this.fBuku.penerbit = ''
    this.fBuku.tahun_terbit = ''
    this.fBuku.sinopsis = ''
  }

  onLoadData(): void {
    this.loadingTbl = true
    this.sc.list().subscribe((output: any) => {
      this.listOfData = output;
      this.loadingTbl = false
    });
  }

  ngOnInit(): void {
    this.onLoadData()
  }
}
