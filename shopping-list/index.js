'use strict';

$(function() {

  function createItem(itemText) {
    return `
        <li>
            <span class="shopping-item">${itemText}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
        </li>
        `;
  }



  /////////////
  //ADD BUTTON
  ////////////

  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const userInput = $(event.target).find('.js-shopping-list-entry');
    const userInputText = userInput.val();
    userInput.val('');
    console.log(userInputText);
    const itemElement = createItem(userInputText);
    $('.shopping-list').append(itemElement);
  });

  $('.shopping-item-controls').on('click', function(event){
    event.stopPropagation();
    const checkButton = $(this).siblings('.shopping-item');
    checkButton.toggleClass('shopping-item__checked');
    console.log(checkButton);
  });

});