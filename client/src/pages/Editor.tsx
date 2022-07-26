import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Sidetab from '../components/Editor/Sidetab';
import EditorSection from '../components/Editor/EditorSection';
import AlertModal from '../components/AlertModal';
import ConfirmModal from '../components/ConfirmModal';
import AddModal from '../components/Editor/AddModal/AddModal';
import Button from '../components/Button';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../reducers/hooks';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { testSite } from '../reducers/SiteReducer';

const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f9;
  display: flex;

  @media screen and (max-width: 1120px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media screen and (max-width: 1120px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Elice Digital Baeum', sans-serif;
    font-size: 4vw;
  }
`;

export default function Editor() {
  const dispatch = useAppDispatch();
  const AlertModalState = useAppSelector((state) => state.alertReducer.state);
  const alertData = useAppSelector((state) => state.alertReducer.alertData);
  const ConfirmModalState = useAppSelector(
    (state) => state.modalReducer.isConfirmModal
  );
  const confirmData = useAppSelector((state) => state.modalReducer.confirmData);
  const AddModalState = useAppSelector(
    (state) => state.modalReducer.isAddModal
  );

  // siteId 별 데이터 불러오기
  const defaultSiteData = {
    id: null,
    name: '',
    domain: '',
    theme: 'Simple',
    font: '',
    colorSet: {
      primary: '',
      secondary: '',
      surface: '',
      background: '',
    },
    blocks: [],
  };
  const { siteId } = useParams();
  const [data, setData] = useState(testSite);

  useEffect(() => {
    const getSiteInfo = async () => {
      const res = await axios.get(`/api/site/${siteId}`);
      console.log('SiteData:', res.data);
      setData(res.data);
    };
    getSiteInfo();
  }, []);

  useEffect(() => {
    dispatch({
      type: 'site/getSite',
      payload: {
        id: null,
        name: data.name,
        domain: data.domain,
        theme: data.theme,
        font: data.font,
        colorSet: data.colorSet,
        blocks: data.blocks,
      },
    });
  }, [data]);

  return (
    <>
      <DesktopContainer>
        <Sidebar />
        <Sidetab />
        <EditorSection />
        {AlertModalState && <AlertModal alertData={alertData} />}
        {ConfirmModalState && <ConfirmModal confirmData={confirmData} />}
        {AddModalState && <AddModal theme="Simple" />}
      </DesktopContainer>
      <MobileContainer>
        <div>
          현재 <b>모바일 버전</b>은 지원하지 않고 있습니다.
        </div>
        <div>
          빠른 시일 내에 <b>업데이트</b> 하도록 하겠습니다.
        </div>
        <br />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="white" size="large">
            Home
          </Button>
        </Link>
      </MobileContainer>
    </>
  );
}
