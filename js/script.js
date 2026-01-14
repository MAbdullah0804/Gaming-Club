// Simple hover animations and alert for join form
const joinForm = document.querySelector('#join form');

joinForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Welcome to the Ultimate Gaming Club! We can\'t wait to see you play!');
});
