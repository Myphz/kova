import { Preferences } from "@capacitor/preferences";
import type { Overwrite } from "@utils/types";

const QUESTS_KEY = "quests";

export type Quest = {
  id: number;
  title: string;
  description: string;
  text: string;
  done?: boolean;
};

type Quests = Record<string, Quest>;

export const quests = $state<Quests>({});

export const loadQuests = async () => {
  const { value } = await Preferences.get({ key: QUESTS_KEY });
  // Empty quests
  Object.keys(quests).forEach((key) => delete quests[key]);
  // Re-assign new quests
  if (!value) return;
  const newQuests = JSON.parse(value) as Quests;
  Object.assign(quests, newQuests);
};

export const saveQuest = async (
  quest: Overwrite<Quest, { id?: Quest["id"] }>
) => {
  if (!quest.id) quest.id = +new Date();
  quests[quest.id] = quest as Quest;

  await saveQuests();
};

export const getQuest = (id: Quest["id"]) => {
  const ret = $derived(quests[id]);
  if (!ret) throw new Error("getQuest: can't find quest!");
  return ret;
};

export const deleteQuest = async (id: Quest["id"]) => {
  delete quests[id];
  await saveQuests();
};

const saveQuests = () =>
  Preferences.set({ key: QUESTS_KEY, value: JSON.stringify(quests) });
