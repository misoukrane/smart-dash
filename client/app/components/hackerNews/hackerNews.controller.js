class HackerNewsController {
  constructor(hackerNews) {
    'ngInject';
    this.title = 'Hacker News';
    this.hackerNewsService = hackerNews;
    this.loadItems();
    this.items = [];
  }

  loadItems() {
    this.hackerNewsService.getTopItems()
      .then(
        (response) => {
          var top5 = response.data.slice(0, 10);
          angular.forEach(top5, (value, key) => {
            this.hackerNewsService.getItem(value)
              .then(
                (response) => {
                  this.items.push(response.data);
                }
              );
          });
        }
      );
  }

  reload() {
    this.items = [];
    this.loadItems();
  }
}

export default HackerNewsController;
