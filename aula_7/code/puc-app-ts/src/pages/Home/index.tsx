import { Button } from 'react-bootstrap';
import { Container } from '../../containers';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <h1>
                {t('Bem vindo a aplicação de Cadastro de Alunos')}
            </h1>
            <Button>
                {t('Realizar Login')}
            </Button>
        </Container>
    )
}

export default Home;