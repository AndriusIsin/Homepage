

color = ['#ff0000', '#ffcc33', '#3366ff'];


document.getElementById('button_back').addEventListener('click', (event) => {
  let element_mode = document.getElementById('mode');
  element_mode.style.backgroundColor = randomMember(color);

});