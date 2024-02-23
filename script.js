const items = document.querySelector('.items');
    let isMouseDown = false;
    let startX, scrollLeft;

    items.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      startX = e.pageX - items.offsetLeft;
      scrollLeft = items.scrollLeft;
      items.classList.add('active');
    });

    items.addEventListener('mouseleave', () => {
      isMouseDown = false;
      items.classList.remove('active');
    });

    items.addEventListener('mouseup', () => {
      isMouseDown = false;
      items.classList.remove('active');
    });

    items.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - items.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the speed of scrolling

      items.scrollLeft = scrollLeft - walk;
    });