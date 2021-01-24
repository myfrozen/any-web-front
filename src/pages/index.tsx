import Link from 'next/link';
import { Layout } from 'components/Layout';
import styled from 'styled-components';

const HH = styled.p`
  color: #ffffff;
  font-size:5em;
	text-align:center;
	line-height:0.95em;
	font-weight:bold;
  margin: 0;
	text-shadow:
		0 0.03em 0.03em #FFAB91,
		0 0.03em 0.03em #000,
		0 0.03em 0.03em #FBE9E7;
}`;

// p, span => 文字

const Diic = styled.div`
  background-image: linear-gradient(135deg, #f3ef12, #dc16a6);
  height: 100vh;
  padding: 3rem;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}`;

const Wrapper = styled.p`
  background: #ffffff;
  line-height: 16px;
  letter-spacing: 1.4px;
  
  text-align:center;
  border-radius: 1em;
  padding: 0;
  margin: 0 10px 10px 10px;
  width: 20%;
  &:hover {
    cursor: pointer;
    background-color:
    #ff69b4;
  }
}`;
const Aik = styled.p`
  color: transparent;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  text-shadow: 0 0.03em 0.03em #ffab91, 0 0.03em 0.03em #000,
    0 0.03em 0.03em #fbe9e7;
`;

const IndexPage: React.VFC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Diic>
      <HH>
        We can enjoy chatting<br></br> with everyone
      </HH>
      <Link href="/signin">
        <Wrapper>
          <Aik>今すぐログインする</Aik>
        </Wrapper>
      </Link>
    </Diic>
  </Layout>
);

export default IndexPage;
