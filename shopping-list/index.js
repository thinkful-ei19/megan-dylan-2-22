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
        const itemElement = createItem(userInputText);
        $('.shopping-list').append(itemElement);
    });

    /////////////
    //CHECK BUTTON
    ////////////

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        event.stopPropagation();
        const checkItem = $(this).closest('li').find('.shopping-item');
        checkItem.toggleClass('shopping-item__checked');
    });

    ////////////////
    //DELETE BUTTON
    ///////////////
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        event.stopPropagation();
        const deleteItem = $(this).closest('li');
        deleteItem.hide();
    });

});