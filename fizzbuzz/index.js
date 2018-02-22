'use strict';

function fizzBuzz(countTo) {
  let result = [];
  for (let i=1; i<=countTo; i++){
      
    if (i%15===0){
      result.push('fizzbuzz');
    }
    else if (i%5===0){
      result.push('buzz');
    }
    else if (i%3===0){
      result.push('fizz');
    }
    else{
      result.push(i);
    }
  }
  return result;
}


function insertFizzBuzz (data){
  let className = '';
    
  if (typeof data === 'string'){
    className = data;
  }

  return (`
    <div class="fizz-buzz-item ${className}">
        <span>${data}</span>
    </div>
    `);
}

function allTheFizzBuzz(fizzData){
  return fizzData.map(insertFizzBuzz);
}

$(function (){
  
  $('#number-chooser').submit(function(event){
    event.preventDefault();
    const numInput = $(event.target).find('#number-choice');
    const initialFizzBuzz = fizzBuzz(parseInt(numInput.val()));
    numInput.val('');
    const elements = allTheFizzBuzz(initialFizzBuzz);
    $('.js-results').html(elements);
  });
});