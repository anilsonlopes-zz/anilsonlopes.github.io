const changeSkull = function () {
  $skull.style.backgroundImage = 'url(./images/skull_' + randomize(9) + '.png)';
  $skull.style.backgroundColor = 'rgb(' + randomize(255) + ', ' + randomize(255) + ', ' + randomize(255)+')';
};

const randomize = function (max) {
  return Math.floor(Math.random() * max);
};

window.onload = function () {
  window.$skull = document.querySelector('.skull');
  $skull.addEventListener('click', changeSkull, false);
  changeSkull();
};
