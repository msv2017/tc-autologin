chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message === 'aadlogin') {
      location.href = 'https://ci.3plearning.com/aadLogin.html';
    }

    if (request.message === 'redirect') {
      location.href = request.url;
    }
  });