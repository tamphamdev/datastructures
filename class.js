class Robot {
  constructor(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight
  }
   introduceSelf() {
     return 'My name is ' + this.name
  }
}

//extends kế thừa toàn bộ attributes & methods của class Cha
// implements tương tự như extends nhưng kế thừa từ interface
//Bonus: instance variables (name, color, weight) trong Object => attributes
// function trong Object => methods
// constructor là hàm khởi tạo, thay thì khai báo biến rồi gán thủ công khi khởi tạo 1 class mới
// vd: r1.name = 'Tom
//  r1.color = 'red
class CoolRobot extends Robot {
  introduceWeight() {
    return this.weight
  }
  introduceSelf() {
    return `Yooo, what'sup ${this.name}`
  }
}

let r1 = new Robot('tom', 'red', 30)
let say = r1.introduceSelf()
let r2 = new CoolRobot('jerry','blue', 40 )
//r2.introduceSelf() === 'Yooo,what'sup Tom