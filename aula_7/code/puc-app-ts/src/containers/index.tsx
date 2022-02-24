import React from 'react';
import { Container as BContainer } from 'react-bootstrap';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Container = ({children}: { children: React.ReactNode}) => {

    return (
        <>
            <Header/>
            <BContainer>
                <div className="pt-1">
                    {children}
                </div>
            </BContainer>
            <Footer />
        </>
    )
}