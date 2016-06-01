function Human() {
    this.name = 'Fedor';
    this.age = 40;
    this.sex = 'male';
    this.height = 181;
    this.weight = 100;
}

function Worker() {
    this.workplace = 'Google';
    this.salary = '5000';
    this.work = function() {
        console.log('I work in GOIT');
    }
}

function Student() {
    this.university = 'DPI';
    this.scholarship = '300';
    this.watchTVShows = function() {
        console.log('I watch NBA');
    }
}


var human1 = new Human();
console.log('1) human', human1.name, human1.age, human1.sex, human1.height, human1.weight);

var worker = new Worker();
worker.__proto__ = new Human();
console.log('2) worker', worker.name, worker.age, worker.workplace, worker.salary);
worker.work();

var student =  new Student();
student.__proto__ = new Human();
console.log('3) student', student.name, student.sex, student.university, student.scholarship);
student.watchTVShows();
