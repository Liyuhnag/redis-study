// Flow Diagram Step Controller
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.flow-diagram').forEach(initDiagram);
  });

  function initDiagram(diagram) {
    var body = diagram.querySelector('.flow-body');
    if (!body) return;

    // Collect all direct step-items
    var steps = body.querySelectorAll('.flow-step-item');
    if (steps.length === 0) return;

    var currentStep = -1;
    var total = steps.length;

    // Create controls bar
    var controls = document.createElement('div');
    controls.className = 'flow-controls';

    var btnReset = document.createElement('button');
    btnReset.className = 'flow-btn reset';
    btnReset.textContent = '⟲ 重置';

    var btnPrev = document.createElement('button');
    btnPrev.className = 'flow-btn';
    btnPrev.textContent = '← 上一步';

    var info = document.createElement('span');
    info.className = 'flow-step-info';

    var btnNext = document.createElement('button');
    btnNext.className = 'flow-btn primary';
    btnNext.textContent = '下一步 →';

    var btnAll = document.createElement('button');
    btnAll.className = 'flow-btn';
    btnAll.textContent = '显示全部';

    controls.appendChild(btnReset);
    controls.appendChild(btnPrev);
    controls.appendChild(info);
    controls.appendChild(btnNext);
    controls.appendChild(btnAll);

    // Insert controls after flow-title
    var title = diagram.querySelector('.flow-title');
    if (title) {
      title.parentNode.insertBefore(controls, title.nextSibling);
    } else {
      diagram.insertBefore(controls, diagram.firstChild);
    }

    function updateUI() {
      info.textContent = (currentStep + 1) + ' / ' + total;
      btnPrev.disabled = currentStep < 0;
      btnNext.disabled = currentStep >= total - 1;

      steps.forEach(function(s, i) {
        s.classList.toggle('active', i <= currentStep);
        s.classList.toggle('current', i === currentStep);
      });
    }

    btnNext.addEventListener('click', function() {
      if (currentStep < total - 1) {
        currentStep++;
        updateUI();
      }
    });

    btnPrev.addEventListener('click', function() {
      if (currentStep >= 0) {
        currentStep--;
        updateUI();
      }
    });

    btnReset.addEventListener('click', function() {
      currentStep = -1;
      updateUI();
    });

    btnAll.addEventListener('click', function() {
      currentStep = total - 1;
      updateUI();
    });

    // Initial state: all hidden
    updateUI();
  }
})();
