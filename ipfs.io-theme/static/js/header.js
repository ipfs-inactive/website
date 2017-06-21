(function () {
  var ANIMATION_ENABLED_KEY = 'ipfs.io:animation-enabled';
  var ENABLE_ANIMATION_LABEL = 'Enable animation';
  var DISABLE_ANIMATION_LABEL = 'Disable animation';

  var starChart = new StarChart(document.getElementById('stars'), PIXI);
  var toggleAnimationButton = document.getElementById('toggle-animation');

  function setAnimationEnabled(enabled) {
    localStorage.setItem(ANIMATION_ENABLED_KEY, enabled);

    var buttonLabel = enabled ? DISABLE_ANIMATION_LABEL : ENABLE_ANIMATION_LABEL;
    toggleAnimationButton.textContent = buttonLabel;

    starChart.setAnimationEnabled(enabled);
  }

  toggleAnimationButton.addEventListener('click', function (event) {
    setAnimationEnabled(!starChart.animationEnabled);
  });

  var animationEnabled = localStorage.getItem(ANIMATION_ENABLED_KEY) !== 'false';
  setAnimationEnabled(animationEnabled);

  if (!animationEnabled) {
    starChart.render();
  }
})();
