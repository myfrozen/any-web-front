import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const P = styled.p`
  color: #ffffff;
  margin: 0 0 0 40px;
  font-size: 1.5rem;
`;

const Nav = styled('nav')`
  display: flex;
  align-items: center;
  color: #000000;
  height: 30px;
  margin: 0 40px 0 0;
`;
const NavAnchor = styled('a')`
  color: #ffffff; /*文字色*/
  cursor: pointer;
  font-family: Circular, spotify-circular, Helvetica, Arial, sans-serif;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: #f3ef;
  }
  &:not(:first-child) {
    margin-left: 50px;
  }
`;

const Footer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  margin: 0;
  height: 200px;
`;
const Span = styled('nav')`
  display: flex;
  color: #ffffff;
  background-color: #000000;
  height: 30px;
  margin-top: 0;
`;

const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #000000;
`;

// "/about" => "localhost:8000```/about````"

export const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header>
        <P>ChatMe</P>
        <Nav>
          <Link href="/">
            <NavAnchor>Home</NavAnchor>
          </Link>
          <Link href="/signin">
            <NavAnchor>Signin</NavAnchor>
          </Link>
          <Link href="/chat">
            <NavAnchor>Chat</NavAnchor>
          </Link>
        </Nav>
      </Header>
      {children}
      <Footer>
        <Span>Made by Hinako Hanashiro</Span>
      </Footer>
    </>
  );
};
