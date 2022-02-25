import  Header from './Header';
import  {Footer}  from './Footer';
import { Fragment } from 'react';
import { Container as BContainer} from 'react-bootstrap';

export const Container = (props) => {
    return (
        <Fragment>
            <Header />
            <BContainer>
                {props.children}
            </BContainer>
            <Footer />
        </Fragment>
    )
}