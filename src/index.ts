import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the mypkg extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'mypkg:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension mypkg is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The mypkg server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
