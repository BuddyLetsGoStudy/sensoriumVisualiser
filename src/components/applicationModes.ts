export const APPLICATION_MODE = {
  WAVE_FORM: "WAVE_FORM",
  AUDIO: "AUDIO",
} as const;

type ObjectValues<T> = T[keyof T];
export type ApplicationMode = ObjectValues<typeof APPLICATION_MODE>;

export const getAppModeDisplayName = (mode: ApplicationMode): string => {
  switch (mode) {
    case APPLICATION_MODE.AUDIO:
      return "🎧 audio";
    case APPLICATION_MODE.WAVE_FORM:
      return "~ waveform";
    default:
      throw new Error(`Unknown mode ${mode}`);
  }
};

export const getPlatformSupportedApplicationModes = (): ApplicationMode[] => {
  return [APPLICATION_MODE.AUDIO, APPLICATION_MODE.WAVE_FORM];
};
