import { ContainerSideBar , ContainerMainContent, Title, InputChat, ContainerInputChat, Title2 }from './style';

import { InputField } from "../../components/InputField";
import { SideBarOption } from '../../components/side_bar_option';


export const Home = () => {
    
    return(


            <screen>
                <ContainerSideBar>
                    
                    <section>
                    <SideBarOption chattittle = "ChatGPT"/>
                    <SideBarOption chattittle = "Explorar GTPs"/>
                    </section>

                    <Title2>Hoje</Title2>
                    
                    <section>
                    <SideBarOption chattittle = "Lorem Ipsum"/>
                    <SideBarOption chattittle = "Lorem Ipsum"/>
                    <SideBarOption chattittle = "Lorem Ipsum"/>
                    <SideBarOption chattittle = "Lorem Ipsum"/>
                    <SideBarOption chattittle = "Lorem Ipsum"/>
                    <SideBarOption chattittle = "Lorem Ipsum"/>
                    </section>
                
                </ContainerSideBar>

                <ContainerMainContent>
                        <Title>Como posso ajudar?</Title>
                        <ContainerInputChat>
                        <InputChat  placeholder='Mensagem ChatGPT' />
                        </ContainerInputChat>
                </ContainerMainContent>
            </screen>
    )
}




