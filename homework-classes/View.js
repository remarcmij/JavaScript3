'use strict';

{
  const { Observer } = window;

  class View extends Observer {
    constructor(model, account) {
      super(model);
      this.model = model;
      this.header = null;
      this.select = null;
      this.mainContainer = null;

      const root = document.getElementById('root');
      this.header = this.createAndAppend('header', root, { class: 'header' });
      this.createAndAppend('p', this.header, { text: account.name });
      this.mainContainer = this.createAndAppend('main', root, {
        id: 'main-container',
      });

      this.model.fetchData();
    }

    /**
     * Receives data from the Subject to which this Observer is registered
     * and renders the data.
     * @param {Object} state On object containing the Model state
     */
    update(state) {
      const { error, repos, selectedRepo, contributors } = state;
      if (error) {
        this.renderError(error);
        return;
      }
      if (this.select == null) {
        this.renderSelect(repos);
      }
      this.mainContainer.innerHTML = '';
      this.renderRepoDetails(selectedRepo);
      this.renderContributors(contributors);
    }

    /**
     * Renders the data for the 'select' message type. Create a <select> element
     * and its <option> children.
     * @param {Object[]} repos An array of repository objects.
     */
    renderSelect(repos) {
      const select = this.createAndAppend('select', this.header);
      // TODO: replace this comment and the console.log with your own code
      console.log(select, repos);
    }

    /**
     * Renders the repository details.
     * @param {Object} repo A repository object.
     */
    renderRepoDetails(repo) {
      // TODO: replace this comment and the console.log with your own code
      console.log(repo);
    }

    /**
     * Renders the list of contributors
     * @param {Object[]} contributors An array of contributor objects
     */
    renderContributors(contributors) {
      // TODO: replace this comment and the console.log with your own code
      console.log(contributors);
    }

    /**
     * Renders an error for the 'error' message type.
     * @param {Error} err An Error object
     */
    renderError(err) {
      // TODO: replace this comment and the console.log with your own code
      console.log(err);
    }

    /**
     * Creates an element, optionally setting its attributes, and appends
     * the element to a parent.
     * @param {string} name The tag name of the element to create.
     * @param {HTMLElement} parent The parent element.
     * @param {Object} options An object with attribute names and values.
     */
    createAndAppend(name, parent, options = {}) {
      const elem = document.createElement(name);
      parent.appendChild(elem);
      Object.entries(options).forEach(([key, value]) => {
        if (key === 'text') {
          elem.textContent = value;
        } else {
          elem.setAttribute(key, value);
        }
      });
      return elem;
    }
  }

  window.View = View;
}
