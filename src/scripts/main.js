'use strict';

document.addEventListener('click', e => {
  const wall = document.body.querySelector('.wall');
  const spider = document.body.querySelector('.spider');
  const clickedElement = document.elementFromPoint(e.clientX, e.clientY);

  if (clickedElement === wall) {
    let spiderLeft = e.clientX
      - wall.offsetLeft
      - wall.clientLeft
      - spider.width / 2;

    let spiderTop = e.clientY
      - wall.offsetTop
      - wall.clientTop
      - spider.height / 2;

    if (spiderLeft < 0) {
      spiderLeft = 0;
    }

    if (spiderTop < 0) {
      spiderTop = 0;
    }

    if (spiderLeft > wall.clientWidth - spider.width) {
      spiderLeft = wall.clientWidth - spider.width;
    }

    if (spiderTop > wall.clientHeight - spider.height) {
      spiderTop = wall.clientHeight - spider.height;
    }
    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
  }
});
