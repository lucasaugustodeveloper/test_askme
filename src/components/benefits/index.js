import "./styles.css";
import React from "react";

import Carousel from "../carousel";
import Title from "../../assets/styled/title";
import Card from "../card";

const contentCards = {
  card1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  card2:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  card3:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
};

const Benefits = props => (
  <div className="benefits row center-xs">
    <div className="benefits__title col-xs-12">
      <Title color="#fff " size="1.3rem">
        beneficios da nossa solução de incentivo e alta performance
      </Title>
    </div>

    <div className="benefits_slider col-xs-12 col-md-8">
      <Carousel>
        <Card title="title 1" content={contentCards.card1} />
        <Card title="title 2" content={contentCards.card2} />
        <Card title="title 3" content={contentCards.card3} />
      </Carousel>
    </div>
  </div>
);

export default Benefits;
