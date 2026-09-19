import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';
  showImage():void{
    this.muestraImage=!this.muestraImage
  }

  heroes:any[]=[
    {
    imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Goku',
    descripcion:'Kame hame ha',
    race:'Saiyan',
    ki:9000
    },
    {
    imagen:'https://dragonball-api.com/characters/bulma.webp',
    nombre:'Bulma',
    descripcion:'te amo vegeta',
    race:'Humano',
    ki:0
    },
    {
    imagen:'https://dragonball-api.com/characters/ChiChi_DBS.webp',
    nombre:'Chi chi',
    descripcion:'Soy mama de goham',
    race:'Humana',
    ki:0
    },
    {
    imagen:'https://dragonball-api.com/characters/Androide_18_Artwork.webp',
    nombre:'Androide 18',
    descripcion:'Es la hermana melliza del Androide Número 17',
    race:'Androide-female',
    ki:300000000
    },





  ]
}
