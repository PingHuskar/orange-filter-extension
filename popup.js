document.addEventListener('DOMContentLoaded', function () {
    const toggleFilterButton = document.getElementById('toggleFilter');
  
    toggleFilterButton.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleFilter' });
      });
    });
  });
  