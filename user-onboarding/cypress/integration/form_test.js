describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    const username = () => cy.get('input[name="username"');
    const email = () => cy.get('input[name="email"]');
    const password = () => cy.get('input[name="password"]');
    const tos = () => cy.get('#tosCheckbox').check();
    const submit = () => cy.get('input[id="submitBtn"]');

    it('sanity checks', () => {
        expect(5).to.equal(5)
        expect(1 + 2).to.equal(3)
    });


    it('the proper elements exist', () => {
        username().should('exist')
        email().should('exist')
        password().should('exist')
        tos().should('exist')
        submit().should('exist')
    });

    describe('filling out inputs', () => {
        it('can type in name input', () => {
            username()
                .should('have.value', '')
                .type('Cori Wooley')
                .should('have.value', 'Cori Wooley')
        })

        it('can type in email input', () => {
            email()
                .should('have.value', '')
                .type('wooleycori@gmail.com')
                .should('have.value', 'wooleycori@gmail.com')
        })

        it('can type in password input', () => {
            password()
                .should('have.value', '')
                .type('blahblahblah')
                .should('have.value', 'blahblahblah')
        })

        it('can check boxes', () => {
            tos()
                cy.get('[type="checkbox"]').check() 
        })

        it('can click button', () => {
            submit()
                cy.get('#submitBtn').click()
        })
    })
});