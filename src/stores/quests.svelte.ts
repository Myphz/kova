type Quest = {
  title: string;
  description: string;
  text: string;
};

export const quests = $state<Quest[]>([]);

export const loadQuests = () => {};
