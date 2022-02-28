function move() {
  document.querySelector('.loading-screen').style.display = 'block';
  document.querySelector('.container').classList.add('blur');
  document.querySelector('.banner').classList.add('blur');
  const elem = document.getElementById('myBar');
  let width = 0;
  let id = setInterval(frame, 15);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '% Complete';
    }
    setTimeout(openUrl, 2000); // Wait 5 seconds

    function openUrl() {
      window.open('https://www.digistore24.com/content/376915/35527/mirkoscono/');
    }
  }
}
