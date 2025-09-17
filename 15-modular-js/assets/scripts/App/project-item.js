import { DOMHelper } from '../Utility/dom-helper.js';

export class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoButton = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoButton.addEventListener(
      'click',
      this.showMoreInfoHandler.bind(this)
    );
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchButton = projectItemElement.querySelector('button:last-of-type');
    switchButton = DOMHelper.clearEventListeners(switchButton);
    switchButton.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchButton.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  connectDrag() {
    document.getElementById(this.id).addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });
  }

  update(updateProjectListsFn, newType) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(newType);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }

    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }
}