const changeSkull = function () {
  $skull.style.backgroundImage = 'url(./images/skull_' + randomize(9) + '.png)';
  $skull.style.backgroundColor = 'rgb(' + randomize(255) + ', ' + randomize(255) + ', ' + randomize(255)+')';
  $skull.style.transform = 'rotateZ(' + randomize([0, 360]) + 'deg)';
  document.body.style.animationDuration = randomize(20) + 's';
};

const randomize = function (max) {
  const types = [
    {
      name: 'number',
      method: function (max) {
        return Math.floor(Math.random() * max);
      }
    },
    {
      name: 'object',
      method: function (max) {
        return max[Math.floor(Math.random() * max.length)]
      }
    }
  ]
  return types.find(type => type.name === typeof max).method(max);
};

window.onload = function () {
  window.$skull = document.querySelector('.skull');
  $skull.addEventListener('click', changeSkull, false);
  window.setInterval(changeSkull, 3000);
};
