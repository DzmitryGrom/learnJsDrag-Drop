(function () {
  'use strict';

  let objects = document.querySelectorAll('#start > .box__dd'),
      isMove = false,
      finishZone = document.querySelector('#finish');

  if ( objects ) {

    [].forEach.call(objects, function (el) {
      el.setAttribute('draggable', 'true');
      el.addEventListener('dragstart', dragStart, false);
      el.addEventListener('dragend', dragEnd, false);
    });

  }

  if ( finishZone ) {

    finishZone.addEventListener('dragstart', dragStart, false);
    finishZone.addEventListener('dragover', dragOver, false);
    finishZone.addEventListener('drop', dragDrop, false);
    finishZone.addEventListener('dropend', dragEnd, false);


  }

  function dragStart (event) {

    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.setData('text', event.target.getAttribute('id'));
    this.style.opacity = '0.4';

  }

  function dragOver (event) {

    event.preventDefault();

  }

  function dragDrop (event) {

    event.preventDefault();

    let elementID = event.dataTransfer.getData('text'),
        element = document.getElementById(elementID);
    event.target.appendChild(element);
    element.removeAttribute('draggable');
    element.style.opacity = '';
    element.classList.add('dragged');
    element.style.cursor = 'default';
    isMove = true;

  }

  function dragEnd() {

    isMove = false;

  }

})();