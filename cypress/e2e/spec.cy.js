describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost/cad_usario')

    cy.get('#nome').type("Fulano")
    cy.wait(500)
    cy.get('#senha').type("123")
    cy.wait(500)
    cy.get('#btn_login').click()


    const user_json = `[
      {
        "id": 1,
        "nome": "Julie",
        "senha": "122"
      },
      {
        "id": 2,
        "nome": "Maria Helena",
        "senha": "147"
      },
      {
        "id": 3,
        "nome": "Anna Laurah",
        "senha": "456"
      },
      {
        "id": 4,
        "nome": "4651651",
        "senha": "789"
      },
      {
        "id": 5,
        "nome": "lara",
        "senha": "852"
      },
      {
        "id": 6,
        "nome": "Fernanda",
        "senha": "369"
      },
      {
        "id": 7,
        "nome": "Camila Regina",
        "senha": "753"
      },
      {
        "id": 8,
        "nome": "Juliana",
        "senha": "951"
      },
      {
        "id": 9,
        "nome": "Isabella",
        "senha": "279"
      },
      {
        "id": 10,
        "nome": "Miriely",
        "senha": "436"
      }
    
    ]`;

    const usuarios = JSON.parse(user_json);
    
    cy.get('body')
    usuarios.forEach((usuario, index) => {
      cy.get('#nome').type(usuario.nome)
      cy.wait(500)
      cy.get('#senha').type(usuario.senha)
      cy.wait(500)
      cy.get('#btn_cadastro').click()
    });
    cy.wait(500)
    cy.get('#btn_listar').click()

  })

 

    

})