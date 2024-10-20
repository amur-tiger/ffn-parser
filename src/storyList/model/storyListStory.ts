import type Story from "../../story/model/story.js";

type StoryListStory = Omit<Story, "chapters">;

export default StoryListStory;
