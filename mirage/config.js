export default function () {
  this.timing = 0;
  this.logging = true;

  this.get('/pages', ({ pages }, req) => {
    if (req.queryParams.firstPage === 'true') {
      return pages.findBy({ isFirstPage: true });
    }

    return pages.all();
  });

  this.get('/pages/:id');
  this.get('/videos/:id');
  this.get('/questions/:id');

  this.passthrough('https://vimeo.com/*');
}
