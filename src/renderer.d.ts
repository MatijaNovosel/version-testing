export interface IElectronAPI {
  update: () => Promise<void>;
  onVersionCheck: (fn: (version: string) => void) => void;
  onReleaseCheck: (fn: (release: boolean) => void) => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
