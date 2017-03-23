import Card from './Card';
import CardGroup from './CardGroup';
import CardDeck from './CardDeck';
import CardColumns from './CardColumns';
import CardBlock from './CardBlock';
import CardLink from './CardLink';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardImg from './CardImg';
import CardImgOverlay from './CardImgOverlay';
import CardSubtitle from './CardSubtitle';
import CardText from './CardText';
import CardTitle from './CardTitle';

export default (rb) => {
  rb.Card = Card;
  rb.CardGroup = CardGroup;
  rb.CardDeck = CardDeck;
  rb.CardColumns = CardColumns;
  rb.CardBlock = CardBlock;
  rb.CardLink = CardLink;
  rb.CardFooter = CardFooter;
  rb.CardHeader = CardHeader;
  rb.CardImg = CardImg;
  rb.CardImgOverlay = CardImgOverlay;
  rb.CardSubtitle = CardSubtitle;
  rb.CardText = CardText;
  rb.CardTitle = CardTitle;
  return rb;
};
