class Pixel {
  constructor() {
    this.color = false;
    this.char = "░░";
    this.style = " ";
  }
  paint() {
    this.color = true;
    this.char = "██";
    this.style = "pintado";
  }
  erase() {
    this.style = "";
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

    renderHtml(){
      let rend = new Array(this.height);
      let htmlRender ='' ;
      for (let i = 0; i < rend.length; i++) {
          rend[i] = new Array(this.width);
          htmlRender +=  '<div class="row">';
          for (let j = 0; j < this.width; j++) {
            rend[i][j] = this.pixels[i][j].style;
            htmlRender += '<div class="pixel '+rend[i][j]+'" id="px-'+i+'-'+j+'"></div>';
          }
          htmlRender +=  '</div>\n ';
        }
        
        const generated = document.querySelector(".generated");
        generated.innerHTML = htmlRender;
        this.becomeClickable();
        
        
        
      }
  becomeClickable(){
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
         const p = document.getElementById('px-'+i+'-'+j);
         p.addEventListener("click", () => {
          //console.log("clicked element"+i+"."+j);
          this.pixels[i][j].paint();
          this.renderHtml();
        });
      }
      
    }
  }
}





let Tela = new Canva(30
,30);
Tela.inicializar();
Tela.renderHtml();
Tela.becomeClickable();


