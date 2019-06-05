//Dado um array de quanto cada pesosa tem, descobrir se o caixa tem troco. Troco inicial é 0 e o preço é 25

function Clerk(name) {
    this.name = name;
    
    this.money = {  //Quantidade de cédulas de cada valor
      25 : 0,
      50 : 0,
      100: 0 
    };
    
    this.sell = function(element, index, array) {
      this.money[element]++;
  
      switch (element) {
        case 25:
          return true;
        case 50:
          this.money[25]--;
          break;
        case 100:
          this.money[50] ? this.money[50]-- : this.money[25] -= 2;
          this.money[25]--;
          break;
      }
      return this.money[25] >= 0;
    };
  }
  
  function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
  }

  console.log(tickets([25, 25, 50, 100]))