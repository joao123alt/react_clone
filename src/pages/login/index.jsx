import { Button } from "../../components/buttom_form"
import { InputField } from "../../components/InputField";

import { Container, Tittle, ContentForms, Paragraph } from "./style";

export const Login = () => {

    const handleLogin = () => {
        alert("Login");
      };

    return(
        <Container>
        <ContentForms>
          <Tittle>Digite sua senha</Tittle>
  
          <InputField propsplaceholder="Digite seu login" propstype="email" />
  
          <InputField propsplaceholder="Senha*" propstype="password" />

          <Paragraph><a href="#">Esqueceu a senha?</a></Paragraph>

          <Button title="Continuar" handleFunction={handleLogin} />

          <span>Não tem uma conta?  <Paragraph><a href="#">Registrar</a></Paragraph></span>

        </ContentForms>
      </Container>
    )
}