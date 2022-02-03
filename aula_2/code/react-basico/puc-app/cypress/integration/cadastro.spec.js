describe('Cadastro de Alunos', () => {
    it('Usuário pode cadastrar um novo Aluno', () => {
        // Acessando a página.
        cy.visit('http://localhost:3000/')
        cy.wait(3000)
        // Logar.
        cy.findByRole('button', {name: /login/i}).click();
        // Navegar para página de cadastro de aluno.
        cy.findByRole('link', {name: /cadastrar alunos/i}).click();
        // Preencher os campos de cadastro do aluno.
        cy.findByRole('textbox', {  name: /nome do aluno/i}).type('Wesley');
        cy.findByRole('textbox', {  name: /idade/i}).type('35');
        cy.findByRole('textbox', {  name: /telefone/i}).type('1192112111');
        cy.findByRole('textbox', {  name: /email/i}).type('wesley@gmail.com');



        // Submeter formulário.
        cy.findByRole('button', {name: /cadastrar/i}).click();

        // Navegar até a lista de alunos
        cy.findByRole('link', {name: /listagem de alunos/i}).click();
        cy.reload();
        cy.findByText(/Wesley/i).click();

    });
});