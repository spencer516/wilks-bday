export default function (server) {
  const page1 = server.create('page', { isFirstPage: true });

  const page2 = server.create('page', {
    pageType: 'video',
    previousPage: page1,
    video: server.create('video')
  });

  const page3 = server.create('page', {
    pageType: 'question',
    previousPage: page2,
    question: server.create('question')
  });

  server.create('page', {
    pageType: 'proceed',
    previousPage: page3
  });
}
