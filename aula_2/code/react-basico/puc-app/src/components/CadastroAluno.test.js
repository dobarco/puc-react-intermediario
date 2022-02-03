
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';



import CadastroAluno from './CadastroAluno';

test('on initial render, the submit button is disabled', () => {
    render(<CadastroAluno />);
    expect(screen.getByRole('button', {  name: /cadastrar/i})).toBeDisabled();
});

test('If telefone and email are filled, button should be enabled', () => {
    // Setup
    render(<CadastroAluno />);

    //Act 
    userEvent.type(screen.getByRole('textbox', {  name: /telefone/i}), '922212221');
    userEvent.type(screen.getByRole('textbox', {  name: /email/i}), 'test@test.com');

    // Assert
    expect(screen.getByRole('button', {  name: /cadastrar/i})).toBeEnabled();
});

test('If telefone is valid and email is not valid, button should be disabled', () => {
    // Setup
    render(<CadastroAluno />);

    //Act 
    userEvent.type(screen.getByRole('textbox', {  name: /telefone/i}), '922212221');
    userEvent.type(screen.getByRole('textbox', {  name: /email/i}), 'testtest.com');

    // Assert
    expect(screen.getByRole('button', {  name: /cadastrar/i})).toBeDisabled();
});

test('If telefone is not valid and email is valid, button should be disabled', () => {
    // Setup
    render(<CadastroAluno />);

    //Act 
    userEvent.type(screen.getByRole('textbox', {  name: /telefone/i}), '92221');
    userEvent.type(screen.getByRole('textbox', {  name: /email/i}), 'test@test.com');

    // Assert
    expect(screen.getByRole('button', {  name: /cadastrar/i})).toBeDisabled();
});

test('If submit button receives a click w/ validFormData, props method onCadastroAluno should be called', async () => {
    // Setup
    let onCadastroAluno = jest.fn();
    const alunoMock = {
        nome: 'nome_fake',
        idade: 'idade_fake',
        telefone: 'telefone_fake',
        email: 'email_fake@'
    }
    render(<CadastroAluno onCadastroAluno={onCadastroAluno} />);

    // Act 
    userEvent.type(screen.getByRole('textbox', {  name: /nome/i}), alunoMock.nome);
    userEvent.type(screen.getByRole('textbox', {  name: /idade/i}), alunoMock.idade);
    userEvent.type(screen.getByRole('textbox', {  name: /email/i}), alunoMock.email);
    userEvent.type(screen.getByRole('textbox', {  name: /telefone/i}), alunoMock.telefone);

    await fireEvent.click(screen.getByRole('button', {  name: /cadastrar/i}))

    //Assert 

    expect(onCadastroAluno).toBeCalled();
    expect(onCadastroAluno).toBeCalledWith(alunoMock);
});

test('If submit button receives a click w/ invalidFormData, props method onCadastroAluno should be called', async () => {
    // Setup
    let onCadastroAluno = jest.fn();
    const alunoMock = {
        nome: 'nome_fake',
        idade: 'idade_fake',
        telefone: 'telefone_fake',
        email: 'email_fake'
    }
    render(<CadastroAluno onCadastroAluno={onCadastroAluno} />);

    // Act 
    userEvent.type(screen.getByRole('textbox', {  name: /nome/i}), alunoMock.nome);
    userEvent.type(screen.getByRole('textbox', {  name: /idade/i}), alunoMock.idade);
    userEvent.type(screen.getByRole('textbox', {  name: /email/i}), alunoMock.email);
    userEvent.type(screen.getByRole('textbox', {  name: /telefone/i}), alunoMock.telefone);

    await fireEvent.click(screen.getByRole('button', {  name: /cadastrar/i}))

    //Assert 

    expect(onCadastroAluno).not.toBeCalled();
})