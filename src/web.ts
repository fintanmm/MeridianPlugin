import { WebPlugin } from '@capacitor/core';
import { MeridianPluginPlugin } from './definitions';

export class MeridianPluginWeb extends WebPlugin implements MeridianPluginPlugin {
  constructor() {
    super({
      name: 'MeridianPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const MeridianPlugin = new MeridianPluginWeb();

export { MeridianPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(MeridianPlugin);
