/*var q =[2,3,3,1,2,5,"hello",{name:'Yerma'}];
console.log(q);

const pi =3.14;

let a = 5;
let b ='5';

if(b==a){
    console.log('true');
    }
    else{
        console.log('false');
    }
    */

    /*var arr =['arr','key','something'];
    console.log(arr.length);

    var array = new Array('arr','key','something');
    console.log(array[1]);

    array[i]='ball';
    console.log(array[1]);
    console.log(array);
    */
  /* var array = new Array('arr','key','something');
   array.push('laptoop');

   console.log(array);

   array.pop();
   console.log(array);

   array.shift();

   console.log(array);

   array.unshift('phone');
   */
  var arr = ['mercedes','bmw','audi'];
/*delete arr(1);

  console.log(arr);
*/

/*arr.splice(1,2,'renault','toyota');

console.log(arr);

let array = arr.slice(0,2);
console.log(array);
*/

/*var arr = [];
var sum = 0;
let avg = 0;

let number = +prompt();
for(let i=0; i<number; i++){
    let num = +prompt();
    arr.push(num);
    sum = sum + num;
    console.log(num)
}
avg = sum / arr.length;

console.log(sum, avg);
*/





users = [
    {"login":"ilyas", "password": "qwerty"},

    {"login":"eldar", "password": "qqqqq"},

    {"login":"assylkhan", "password": "qweqwe"},

    {"login":"anel", "password": "asdasd"},

    {"login":"alibek", "password": "aaaaaa"}
         ];

var text = "";

 for(var i=0;i<users.length;i++){
  text+=users[i]["login"] + " - " + users[i]["password"]+"\n";
}
alert(text);

console.log(users);







