import { Preferences } from "@capacitor/preferences";

const QUESTS_KEY = "quests";

type Quest = {
  title: string;
  description: string;
  text: string;
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

type SaveQuestArg = {
  quest: Quest;
  id: string;
};

export const saveQuest = async ({ quest, id }: SaveQuestArg) => {
  quests[id] = quest;
  saveQuests();
};

const saveQuests = () =>
  Preferences.set({ key: QUESTS_KEY, value: JSON.stringify(quests) });
