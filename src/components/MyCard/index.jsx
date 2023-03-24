import React from "react";
import {
  Card,
  Container,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
} from "reactstrap";
const MyCard = ({imgSrc, cardTitle, cardFooter, handleClick}:{imgSrc:string, cardTitle: string, cardFooter:string, handleClick?:()=>void}) => {
  return (
    <Card style={{ maxWidth: 300 }} onCliclk={handleClick}>
      <CardHeader>
        <img src={imgSrc}></img>
      </CardHeader>
      <CardBody>
        <p className="text-primary">{cardTitle}</p>
        <p className="text-muted">{cardFooter}</p>
      </CardBody>
    </Card>
  );
};
export default MyCard;
