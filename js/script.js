const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {

  const box = document.createElement('div');
  box.classList.add("box");
  container.append(box);   

  //Condizioni numeri 3 e 5
  if (!(i % 3) && !(i % 5)){
    box.append('FizzBuzz');
  }else if (!(i % 3)){
    box.append('Fizz');
  }else if (!(i % 5)){
    box.append('Buzz');
  }else{
    box.append(`${i}`); 
  } 
  
  console.log(box, i);
}
