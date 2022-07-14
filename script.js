class Pixel {
  constructor() {
    this.color = false;
    this.char = "░░";
  }
  paint() {
    this.color = true;
    this.char = "██";
  }
  erase() {
    this.color = false;
  }
}

class Canva {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.pixels = new Array();

    for (let i = 0; i < height; i++) {
      const element = new Array(width);
      this.pixels.push(element);
    }

  }
  inicializar() {
    for (let i = 0; i < this.pixels.length; i++) {
      for (let j = 0; j < this.width; j++) {
        this.pixels[i][j] = new Pixel(i, j);
      }
    }
  }

  render(){
    let rend = new Array(this.height);
    let alerta ='' ;
    for (let i = 0; i < rend.length; i++) {
        rend[i] = new Array(this.width);
        for (let j = 0; j < this.width; j++) {
          rend[i][j] = this.pixels[i][j].char;
          alerta += this.pixels[i][j].char;
        }
        alerta +=  '\n';
      }
      console.table(rend);
      alert(alerta);
      
    }
    
    
  
}

alert("Bienvenido al Proyecto Paint. Esto es un simulador de software para dibujar");
alert("Instrucciones:"+'\n'+" Se muestra un lienzo de 8x8 pixeles. Tienes que seleccionar pixeles para que se pinten. La manera de seleccionarlos es eligiendo la coordenada X y luego la coordenada Y. Se termina cuando se ingresa cualquier valor fuera del rango (0-7) ");

let Tela = new Canva(8,8);
Tela.inicializar();
Tela.render();

let inputX = 0;
let inputY= 0;

while(!isNaN(inputX) && !isNaN(inputY)){
inputX = prompt("Ingresa coordenada X");
inputY = prompt("Ingresa coordenada Y");
Tela.pixels[inputX][inputY].paint();
Tela.render();
}


