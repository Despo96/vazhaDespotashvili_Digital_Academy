(function () {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let equal = document.querySelector('.equal');
  let clearAll = document.querySelector('.clearAll');
  let clear = document.querySelector('.clear');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener('click', function (e) {
    if (screen.value === '') {
      screen.value = 'Please Enter';
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clearAll.addEventListener('click', () => {
    screen.value = '';
  });

  clear.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1);
  });
})();
