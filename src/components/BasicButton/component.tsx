import styled from 'styled-components';

const Bus = styled.button`
  /* appearance: none;
  color: #ffffff;
  background-color: #000000;
  margin: 30px, 1000px, 5000px, 50px;
  float: right;
  width: 100px; */
  /*線色*/
  padding: 0.5em; /*文字周りの余白*/
  border-radius: 0.5em; /*角丸*/
  width: 100px;
  margin: 50px, 1000px, 5000px, 50px;
  display: inline-block;
  position: relative;
  height: 50px;
  padding: 1em 1.4em;
  text-decoration: none;
  background: #668ad8; /*ボタン色*/
  color: #fff;
  border-bottom: solid 5px #36528c; /*ボタン色より暗めに*/
  border-right: solid 5px #5375bd; /*ボタン色より暗めに*/
`;
type BasicButtonProps = {
  title: string;
  onClick: () => void;
};

export const BasicButton: React.VFC<BasicButtonProps> = ({
  title,
  onClick,
}: BasicButtonProps) => {
  return <Bus onClick={onClick}>{title}</Bus>;
};
