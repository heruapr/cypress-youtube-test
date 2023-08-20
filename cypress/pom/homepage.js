class HomePage {
  // Elements
  get youtubeLogo() {
    return cy.get('#start');
  }

  get menuButton() {
    return cy.get('#guide-icon > yt-icon-shape > icon-shape > div').first();
  }

  get videosRecommendation() {
    return cy.get('#contents').first();
  }

  get trendingCategory() {
    return cy.get('#endpoint > tp-yt-paper-item').children().contains('Trending', { matchCase: true }).scrollIntoView();
  }

  get shortsCategory() {
    return cy.get('#endpoint > tp-yt-paper-item').children().contains('Shorts', { matchCase: true }).scrollIntoView();
  }

  get shortsSection() {
    return cy.get('#shorts-container');
  }

  get subscriptionsCategory() {
    return cy.get('#endpoint > tp-yt-paper-item').children().contains('Subscriptions', { matchCase: true }).scrollIntoView();
  }

  get searchBar() {
    return cy.get('#search-input');
  }

  get searchInput() {
    return this.searchBar.children('#search');
  }
  
  get searchButton() {
    return cy.get('#search-icon-legacy');
  }

  get videoThumbnail() {
    return cy.get('#dismissible').first();
  }

  get thumbnailTitle() {
    return this.videoThumbnail.children().next().next().children('#meta').children().first().children('#video-title-link');
  }

  get thumbnailUsername() {
    return this.videoThumbnail.children().next().next().children('#meta').children().next().children('#metadata').children('#byline-container').children('#channel-name');
  }

  get thumbnailViewCount() {
    return this.videoThumbnail.children().next().next().get('#meta > ytd-video-meta-block > #metadata > #metadata-line > span:nth-child(3)');
  }

  get thumbnailUploadDate() {
    return this.videoThumbnail.children().next().next().get('#meta > ytd-video-meta-block > #metadata > #metadata-line > span:nth-child(4)');
  }
}

export default new HomePage();
