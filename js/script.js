class Pixel {
  constructor() {
    this.color = false;
    this.char = "░░";
    this.style = " ";
  }
  paint(color) {
    this.color = true;
    this.char = "██";
    this.style = color;
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
    this.cursorPressed = false;
    this.color = "pintado";

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
    this.renderHtml();
    this.becomeClickable();
  }

  render() {
    let rend = new Array(this.height);
    let alerta = "";
    for (let i = 0; i < rend.length; i++) {
      rend[i] = new Array(this.width);
      for (let j = 0; j < this.width; j++) {
        rend[i][j] = this.pixels[i][j].char;
        alerta += this.pixels[i][j].char;
      }
      alerta += "\n";
    }
    console.table(rend);
    alert(alerta);
  }

  renderHtml() {
    let rend = new Array(this.height);
    let htmlRender = "";
    for (let i = 0; i < rend.length; i++) {
      rend[i] = new Array(this.width);
      htmlRender += '<div class="row">';
      for (let j = 0; j < this.width; j++) {
        rend[i][j] = this.pixels[i][j].style;
        htmlRender +=
          '<div class="pixel ' +
          rend[i][j] +
          '" id="px-' +
          i +
          "-" +
          j +
          '"></div>';
      }
      htmlRender += "</div>\n ";
    }

    const generated = document.querySelector(".generated");
    generated.innerHTML = htmlRender;
    this.becomeClickable();
  }
  becomeClickable() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        const p = document.getElementById("px-" + i + "-" + j);

        p.addEventListener("mousemove", () => {
          if (this.cursorPressed) {
            this.pixels[i][j].paint(this.color);
          }
        });
        p.addEventListener("mousedown", () => {
          this.cursorPressed = true;
          this.pixels[i][j].paint(this.color);
          this.renderHtml();
        });

        p.addEventListener("mouseup", () => {
          this.cursorPressed = false;
          this.renderHtml();
        });
      }
    }
  }
  save() {
    const guardarLocal = (clave, valor) => {
      localStorage.setItem(clave, valor);
    };
    guardarLocal("dibujo", JSON.stringify(this.pixels));
  }
  load() {
    const filas = JSON.parse(localStorage.getItem("dibujo"));
    

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.pixels[i][j].paint(filas[i][j].style);
      }
    }
    this.renderHtml();
  }
}

let Tela = new Canva(50, 50);
Tela.inicializar();

const c1 = document.querySelector(".color1");
c1.addEventListener("click", () => {
  Tela.color = "pintado";
});
const c2 = document.querySelector(".color2");
c2.addEventListener("click", () => {
  Tela.color = "pintado2";
});
const c3 = document.querySelector(".color3");
c3.addEventListener("click", () => {
  Tela.color = "pintado3";
});
const c4 = document.querySelector(".color4");
c4.addEventListener("click", () => {
  Tela.inicializar();
});

const c5 = document.querySelector(".color5");
c5.addEventListener("click", () => {
  Tela.save();
});

const c6 = document.querySelector(".color6");
c6.addEventListener("click", () => {
  Tela.load();
});


