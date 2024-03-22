import type Story from "../../story/model/story";

type StoryListStory = Omit<Story, "chapters">;

export default StoryListStory;
