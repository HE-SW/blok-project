import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../Button';
import { MainTitle } from './MyInfo';
import { TemplateCard } from './TemplateCard';
import { templateCardData } from './TemplateData';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../reducers';

const Container = styled.div`
  margin-bottom: 10px;

  .dashboardTitle {
    margin-top: 62px;
  }

  @media screen and (max-width: 780px) {
    .title {
      margin-top: 102px;
    }
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

const Table = styled.table`
  border-bottom: 1px solid #e5e5e5;
  border-collapse: collapse;
  width: 1120px;
  min-height: 100px;
  user-select: none;

  tbody {
    height: 120px;
  }

  th {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }

  td {
    padding: 1rem 4.8rem;
    text-align: center;
    transition: 0.2s ease-out;

    .editButton {
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 780px) {
    td {
      padding: 1rem;
    }
  }
  @media screen and (max-width: 1120px) {
    width: 100%;
  }
`;

const TemplateBox = styled.div`
  display: flex;
  width: 1120px;
  justify-content: center;
  align-items: center;
  z-index: 5;
  overflow: hidden;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
  }
`;

export const ControlButton = styled(Button)`
  pointer-events: auto;
  cursor: pointer;

  @media screen and (max-width: 780px) {
    margin-right: 0;
    margin-bottom: 0.3rem;
    justify-content: center;
  }
`;

const AddButton = styled(Button)`
  float: right;
  margin-top: 22px;

  @media screen and (max-width: 780px) {
    width: 100%;
    margin-right: 0;
    justify-content: center;
  }
`;

export function TemplateList() {
  const dispatch = useAppDispatch();

  const showModalHandler = (template: string) => {
    dispatch({ type: 'TEMPLATE/MODAL_ON', template: template });
  };

  // 템플릿 데이터 3개만 불러오기
  function DashboardTemplateList() {
    let list = [];
    for (let i = 0; i < templateCardData.length - 1; i++) {
      list.push(templateCardData[i]);
    }
    return list;
  }

  return (
    <Container>
      <MainTitle className='title'>Template</MainTitle>
      <TemplateBox>
        {DashboardTemplateList()?.map((e: any, idx: number) => (
          <div key={idx}>
            <TemplateCard
              title={e.title}
              description={e.description}
              color1={e.color1}
              color2={e.color2}
              onClick={() => showModalHandler(e.title)}
            />
          </div>
        ))}
      </TemplateBox>
    </Container>
  );
}

export function DashboardInfo() {
  const [data, setData] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  // userId 별 sites 데이터 조회
  const getUserInfo = async () => {
    try {
      // current loginUser 데이터 가져와서 redux store에 저장
      const loginCheckData = await axios.get('/api/user/logincheck');
      const user = loginCheckData.data;
      if (!user.userId) {
        nav('/login');
      }
      const res = await axios.get(`/api/site/user/${user.userId}`);
      console.log('site Data:', res.data);
      setData(() => res.data);

      dispatch({
        type: 'USER/LOGIN',
        payload: {
          userId: user.userId,
          email: user.email,
          role: user.role,
          userName: user.userName,
          oauth: user.oauth,
          passwordReset: user.passwordReset,
          profileImage: user.profileImage,
          plan: user.plan,
        },
      });
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // 사이트 추가 버튼 클릭 시, 템플릿 모달 보여짐
  const showModalHandler = () => {
    dispatch({ type: 'TEMPLATE/MODAL_ON' });
  };

  // siteId 별 사이트 삭제
  const deleteHandler = (props: string) => {
    dispatch({
      type: 'CONFIRM/MODAL_ON',
      payload: {
        title: '삭제',
        msg: '정말 삭제하시겠습니까?',
        onConfirm: deleteSite(props),
      },
    });
  };

  const deleteSite = (props: string) => async () => {
    try {
      await axios.delete(`/api/site/${props}`);
      dispatch({ type: 'CONFIRM/MODAL_OFF' });
      dispatch({
        type: 'alertOn',
        payload: { msg: '사이트가 삭제되었습니다.' },
      });
      getUserInfo();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <MainTitle className='title dashboardTitle'>Dashboard</MainTitle>
      <div className='tableBox'>
        <Table>
          <thead>
            <tr>
              <th>웹 사이트</th>
              <th>플랜</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((e, idx) => (
                <tr key={idx}>
                  <td>
                    {e.name}
                    <br />
                    <a href={e.domain}>www.blok.com/{e.domain}</a>
                  </td>
                  <td>Free</td>
                  <td>
                    <Link
                      to={`/editor/${e._id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <ControlButton
                        className='editButton'
                        rounding
                        color='white'
                        onClick={() => dispatch({ type: 'Block' })}
                      >
                        Edit
                      </ControlButton>
                    </Link>
                    <ControlButton
                      className='deleteButton'
                      onClick={() => deleteHandler(e._id)}
                      color='gray'
                      rounding
                    >
                      Delete
                    </ControlButton>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>사이트가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </Table>
        <AddButton
          className='addButton'
          onClick={showModalHandler}
          size='medium'
          rounding
        >
          사이트 추가
        </AddButton>
      </div>
    </Container>
  );
}
