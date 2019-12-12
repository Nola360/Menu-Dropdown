const navbarButton = document.querySelector('.navbar-button-container');
const navbarLinks = document.querySelector('.navbar-links');

navbarButton.addEventListener('click', function () {
  // check if nav bar links contains class of navbar collapse
  let value = navbarLinks.classList.contains('navbar-collapse');
  if (value) {
    navbarLinks.classList.remove('navbar-collapse')
    //removes effect from navbar button
    navbarButton.classList.remove('change')
  } else {
    navbarLinks.classList.add('navbar-collapse');
    //adds class of change to navbar button
    navbarButton.classList.add('change')
  }
})
