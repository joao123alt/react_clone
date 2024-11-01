import styled from 'styled-components';


export const screen = styled.div`
  height: 100vh;
  width: 100vh;

 `;



export const ContainerSideBar = styled.div`
  background-color: #F9F9F9;
  height: 100vh;
  width: 260px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

`;

export const ContainerMainContent = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width:100%;
  margin-left: 260px;
  margin-right: 100px;
  margin-top: 200px;
  margin-bottom: 20px;
`; 

export const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: #333;
`;

export const Title2 = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: #333;
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;
`;
export const ContainerInputChat = styled.div`
  border: none;
  border-radius: 25px;
  background-color: #F4F4F4;
  height: 55px;
  width: 700px;
  padding-left: 20px;
  
  `;

export const InputChat = styled.input`
  border: none;
  height: 90%;
  width: 85%;
  background-color: #F4F4F4;
  padding-left:20px
`;