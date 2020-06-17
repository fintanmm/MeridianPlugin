declare module "@capacitor/core" {
  interface PluginRegistry {
    MeridianPlugin: MeridianPluginPlugin;
  }
}

export interface MeridianPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
