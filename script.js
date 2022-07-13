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

let Tela = new Canva(4,4);
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


