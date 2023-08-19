import HomePage from '../pom/homepage.js';
import searchValue from '../fixtures/searchValue';
const url = 'https://youtube.com';

describe('End-to-End Test Case: YouTube Homepage', () => {
  before(() => {
    cy.visit(url);
  })
  it('should succesfully exploring youtube homepage', () => {
    HomePage.youtubeLogo.should('be.visible');
    HomePage.videosRecommendation.should('be.visible');
    HomePage.videoThumbnail.should('be.visible');
    HomePage.thumbnailTitle.should('be.visible');
    HomePage.thumbnailUsername.should('be.visible');
    HomePage.thumbnailUploadDate.should('be.visible');
    HomePage.menuButton.click();
    HomePage.trendingCategory.should('be.visible');
    HomePage.trendingCategory.click();
    cy.url().should('contain', '/feed/trending');
    cy.go('back')
    HomePage.shortsCategory.should('be.visible');
    HomePage.shortsCategory.click();
    cy.url().should('contain', 'shorts');
    HomePage.shortsSection.should('be.visible');
    cy.go('back')
    HomePage.menuButton.click();
    HomePage.subscriptionsCategory.should('be.visible');
    HomePage.subscriptionsCategory.click();
    cy.url().should('contain', '/feed/subscriptions');
    cy.visit(url);
    HomePage.searchBar.should('be.visible');
    HomePage.searchInput.type(searchValue.value);
    HomePage.searchButton.click();
    cy.url().should('contain', '/results?search_query=populix');
  })
})