class DOMHelper {
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
    element.scrollIntoView({behavior: 'smooth'});
  }

  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);

    return clonedElement;
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }

    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip() {
    this.detach();
    this.closeNotifier();
  }

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = this.text;

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';

    tooltipElement.addEventListener('click', this.closeTooltip.bind(this));
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
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

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    for (const item of projectItems) {
      this.projects.push(
        new ProjectItem(item.id, this.switchProject.bind(this), this.type)
      );
    }
  }

  setSwitchHandlerFunction(switchHandler) {
    this.switchHandler = switchHandler;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(projectIndex, 1);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');

    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
