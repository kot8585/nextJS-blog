import Card from "./index";

export default {
  title: "My Cards",
};

const Template = (arguments_) => <Card {...arguments_} />;

export const GreenCard = Template.bind({});

GreenCard.args = {
  title: "Hello World",
  showSub: false,
  background: "yellow-600",
  imgUrl: "https://path/to/some/image",
  Children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
};