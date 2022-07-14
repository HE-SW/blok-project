import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 20px;
  height: 60px;
  flex-grow: 1;
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DomainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyPage = styled.div`
  font-weight: 650;
  margin-right: 5px;
`;

const Domain = styled.div`
  color: black;
  text-decoration: none;
`;

const CopyButton = styled.button`
  background-color: white;
  border: 1px solid #d9d9d9;
  padding: 5px 10px;
  border-radius: 40px / 40px;
  margin-left: 10px;
  font-weight: 600;
  
  :hover {
    cursor: pointer;
  }
`;

const SaveButton = styled.button`
  background-color: black;
  border: 1px solid black;
  padding: 5px 12px;
  border-radius: 40px / 40px;

  font-weight: 600;
  color: white;
  font-size: 18px;

  :hover {
    cursor: pointer;
  }
`;

export default function PublishBar() {
  const dispatch = useDispatch();
  const [domain, setDomain] = useState('');

  const getDomainInfo = async () => {
    axios.get("/site/2").then((res): void => {
      const domain = res.data.sites[0].domain;
      setDomain(domain);
    });
  };

  useEffect(() => {
    getDomainInfo();
  }, []);

  let msg = "";
  async function copyHandler() {
    try {
      await navigator.clipboard.writeText(domain);
      msg = "클립보드에 복사되었습니다.";
    } catch (err) {
      console.log(err);
      msg = "잠시 후 시도해주세요.";
    }
    dispatch({ type: "alertOn", payload: msg });
  }

  return (
    <Container>
      <DomainContainer>
        <MyPage>MyPage:</MyPage>
        <Domain>{domain}</Domain>
        <CopyButton onClick={copyHandler}>복사</CopyButton>
      </DomainContainer>
      <SaveButton>저장</SaveButton>
    </Container>
  );
}