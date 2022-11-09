import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bolinha = 'https://w7.pngwing.com/pngs/377/369/png-transparent-letter-o-alphabet-letter-miscellaneous-monochrome-black-thumbnail.png'
  xis =  'https://img.freepik.com/icones-gratis/x-simbolo_318-1407.jpg'

  rodada = 0;

  lista: Object[] = ['', '', '', '', '', '', '', '', '']

  verificar(num:number){
      if(this.rodada == 0){
        this.lista[num] = this.xis
        this.rodada++
      }else{
      if(this.rodada % 2 != 0){
        if(this.lista[num] == this.xis){
  
        }else if(this.lista[num] == this.bolinha){
  
        }else{
          this.rodada++
          this.lista[num] = this.bolinha
        }
      }else{
        if(this.lista[num] == this.xis){
  
        }else if(this.lista[num] == this.bolinha){
  
        }else{
          this.rodada++
          this.lista[num] = this.xis
        }
      }
      let vitoria = this.vitoria()
      if(vitoria == 'null'){

      }else{
        window.location.reload()
        alert(vitoria);
      }
      
    }
}
vitoria() {
    for(let i = 0; i < 9; i++){
        if(i == 0 || i == 4 || i == 7){
          if(this.lista[i] == this.lista[i + 1] && this.lista[i] == this.lista[i + 2] && this.lista[i] == this.bolinha){
            return 'Vitória da bolinha'
          }else if(this.lista[i] == this.lista[i + 1] && this.lista[i] == this.lista[i + 2] && this.lista[i] == this.xis){
            return 'Vitória do Xis'
          }else{
            return 'null'
          }
        }else if(i == 0 || i == 1 || i == 2){
          if(this.lista[i] == this.lista[i + 3] && this.lista[i] == this.lista[i + 6] && this.lista[i] == this.bolinha){
            return 'Vitória da bolinha'
          }else if(this.lista[i] == this.lista[i + 3] && this.lista[i] == this.lista[i + 6] && this.lista[i] == this.xis){
            return 'Vitória do Xis'
          }else{
            return 'null'
          }
        }else if(i == 0 || i == 2){
          if(this.lista[i] == this.lista[i + 4] && this.lista[i] == this.lista[i + 8] || this.lista[i] == this.lista[i + 2] && this.lista[i] == this.lista[i + 4] && this.lista[i] == this.bolinha){
            return 'Vitória da bolinha'
          }else if(this.lista[i] == this.lista[i + 4] && this.lista[i] == this.lista[i + 8] || this.lista[i] == this.lista[i + 2] && this.lista[i] == this.lista[i + 4] && this.lista[i] == this.xis){
            return 'Vitória do Xis'
          }else{
            return 'null'
          }
        }
    }
  }
}
