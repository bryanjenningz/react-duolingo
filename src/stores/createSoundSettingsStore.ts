import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type SoundSettingsSlice = {
  soundEffects: boolean;
  speakingExercises: boolean;
  listeningExercises: boolean;
  setSoundEffects: (isOn: boolean) => void;
  setSpeakingExercises: (isOn: boolean) => void;
  setListeningExercises: (isOn: boolean) => void;
};

export const createSoundSettingsSlice: BoundStateCreator<SoundSettingsSlice> = (
  set,
) => ({
  soundEffects: true,
  speakingExercises: true,
  listeningExercises: true,
  setSoundEffects: (isOn: boolean) => set(() => ({ soundEffects: isOn })),
  setSpeakingExercises: (isOn: boolean) =>
    set(() => ({ speakingExercises: isOn })),
  setListeningExercises: (isOn: boolean) =>
    set(() => ({ listeningExercises: isOn })),
});
