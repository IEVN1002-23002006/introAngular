import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})
export class Figuras {
  base: string = '';
  altura: string = '';
  radio: string = '';
  lado: string = '';
  apotema: string = '';
  perimetro: string = '';
  FiguraSeleccionada: string = 'triangulo';
  area: number = 0;

  triangulo(): void {
    this.area = (parseFloat(this.base) * parseFloat(this.altura)) / 2;
  }

  rectangulo(): void {
    this.area = parseFloat(this.base) * parseFloat(this.altura);
  }

  circulo(): void {
    this.area = 3.16 * (parseFloat(this.radio)*parseFloat(this.radio))
  }

  pentagono(): void {
    const perim = this.lado ? parseFloat(this.lado) * 5 : parseFloat(this.perimetro);
    this.area = (perim * parseFloat(this.apotema)) / 2;
  }

  calcular(): void {
    switch (this.FiguraSeleccionada) {
      case 'triangulo':
        this.triangulo();
        break;
      case 'rectangulo':
        this.rectangulo();
        break;
      case 'circulo':
        this.circulo();
        break;
      case 'pentagono':
        this.pentagono();
        break;
    }
  }
}
