let isFilterEnabled = true;
const color = `#FE6B13`

function applyFilter() {
  if (isFilterEnabled) {
    const filterDiv = document.createElement('div');
    filterDiv.className = 'moveforward'
    filterDiv.style.position = 'fixed';
    filterDiv.style.top = '0';
    filterDiv.style.left = '0';
    filterDiv.style.width = '100%';
    filterDiv.style.height = '100%';
    filterDiv.style.backgroundColor = color;
    filterDiv.style.zIndex = '9999999';
    filterDiv.style.opacity = '0.7'
    filterDiv.style.pointerEvents = 'none'

    document.body.appendChild(filterDiv);
  }
}


applyFilter();
