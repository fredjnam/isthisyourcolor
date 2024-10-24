const colors = {
    red: 'warm',
    blue: 'cool',
    yellow: 'vibrant',
    green: 'cool',
  };
  
  const colorBoxes = document.querySelectorAll('.color-box');
  const categories = document.querySelectorAll('.category');
  const feedback = document.getElementById('feedback');
  
  colorBoxes.forEach(box => {
    box.addEventListener('dragstart', dragStart);
  });
  
  categories.forEach(category => {
    category.addEventListener('dragover', dragOver);
    category.addEventListener('drop', drop);
  });
  
  function dragStart(e) {
    e.dataTransfer.setData('color', e.target.dataset.color);
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function drop(e) {
    const droppedColor = e.dataTransfer.getData('color');
    const targetCategory = e.target.dataset.category;
  
    if (colors[droppedColor] === targetCategory) {
      feedback.innerText = `${droppedColor} belongs to ${targetCategory}!`;
    } else {
      feedback.innerText = `${droppedColor} doesn't belong to ${targetCategory}.`;
    }
  }
  