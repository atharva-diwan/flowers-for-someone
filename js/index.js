const title = document.querySelector('.title')
const text = `I Have Something`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

// Use responsive wrapping based on screen size
if (window.innerWidth > 768) {
  title.style.flexWrap = 'wrap'
} else {
  title.style.flexWrap = 'nowrap'
}

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});