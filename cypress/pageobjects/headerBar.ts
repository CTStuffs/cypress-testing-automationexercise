class headerBar {
    elements = {
        shopMenu: () => cy.get('.nav')
    }

    clickMenuItem(item: string) {
        this.elements.shopMenu().find('a').contains(item).click();
    }

    checkMenuItemExists(item: string) {
        this.elements.shopMenu().find('a').contains(item);
    }
}

export default headerBar;