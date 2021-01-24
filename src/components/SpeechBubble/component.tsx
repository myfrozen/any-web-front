import styled from 'styled-components';

const Contianer = styled.div`
  font-size: 15px;
  font-family: helvetica, arial, sans-serif;
  height: 150px;
`;

const Timep = styled.p`
  color: rgb(0, 0, 0);
  padding-top: 35px;
  margin-left: 10px;
`;
const Name = styled.p`
  margin-left: 130px;
  margin-bottom: 1px;
  color: #000000;
`;
const Prof = styled.div`
  display: flex;
`;
const Com = styled.p`
  position: relative;
  display: inline-block;
  margin: 1.5em 0 1.5em 15px;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 20px;
  background: #fff;
  border-radius: 0.5em;
  padding: 0.5em;
`;

const All = styled.div``;
const BubbleImg = styled.img`
  // border-radius: 50%;
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  background-position: center center;
  border: 9px solid #000000;
  float: left;
`;
type SpeechBubbleProps = {
  message: string;
  username: string;
  image: string;
  timestamp: string;
};
// c: int a => 数字型
// React.VFC => コンポーネントを意味する
// React.VFC<propsの方を指定できる>
export const SpeechBubble: React.VFC<SpeechBubbleProps> = ({
  message,
  username,
  image,
  timestamp,
}: SpeechBubbleProps) => {
  return (
    <Contianer>
      <BubbleImg src={image} />
      <All>
        <Name>{username}</Name>
        <Prof>
          <Com>{message}</Com>
          <Timep>{timestamp}</Timep>
        </Prof>
      </All>
    </Contianer>
  );
};

// <p class="message-color">{message}</p>
//
// .message-color {
//  color: #ff0000;
// }
