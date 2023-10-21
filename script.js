// Challenge 1 :
window.onload = function () {
    const name = document.getElementById('user');
    name.innerHTML = 'Sahil';
  };
  
  // Challenge 2 :
  const buttons = document.getElementById('btn-click');
  buttons.onclick = function () {
    buttons.style.background = 'orange';
  };
  
  // Challenge 3 :
  function makeSentence() {
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adverb = document.getElementById('adverb').value;
    const sentence = noun + ' ' + verb + ' ' + adverb;
    const statement = document.getElementById('statement');
    statement.innerHTML = sentence;
  }
  
  const button = document.getElementById('build-button');
  button.addEventListener('click', makeSentence);
  
  
  // Challenge 4.1
  var grandparentDiv = document.getElementById('grandparent');
  var parentDiv = document.getElementById('parent');
  var childDiv = document.getElementById('child');
  
  childDiv.addEventListener('click', function () {
    console.log('Child clicked');
  });
  parentDiv.addEventListener('click', function () {
    console.log('Parent clicked');
  });
  grandparentDiv.addEventListener('click', function () {
    console.log('Grandparent clicked');
  });
  
  // Challenge 4.2
  grandparentDiv.addEventListener(
    'click',
    function () {
      console.log('Grandparent clicked');
    },
    true
  );
  parentDiv.addEventListener(
    'click',
    function () {
      console.log('Parent clicked');
    },
    true
  );
  childDiv.addEventListener(
    'click',
    function () {
      console.log('Child clicked');
    },
    true
  );
  
  // Challenge 5
  var category = document.getElementById('category');
  category.addEventListener('click', function (event) {
    if (event.target.id === 'blazers') {
      console.log('blazers');
    }
  });