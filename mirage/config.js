export default function () {
  this.timing = 0;

  this.get('/pages', ({ pages }, req) => {
    if (req.queryParams.firstPage === 'true') {
      return pages.findBy({ isFirstPage: true });
    }

    return pages.all();
  });

  this.get('/pages/:id');
}
