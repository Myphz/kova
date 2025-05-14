import type { Quest } from "../stores/quests.svelte";

const SERVER_URL = "https://kova.fly.dev";

export const getQuestDescription = async (
  quest: Pick<Quest, "title" | "text">
) => {
  const res = await fetch(`${SERVER_URL}/generate-description`, {
    method: "POST",
    body: JSON.stringify(quest),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const { description } = await res.json();
  return description;
};
