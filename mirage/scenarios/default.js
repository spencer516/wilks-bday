export default function (server) {
  const page1 = server.create('page', { isFirstPage: true });

  const page2 = server.create('page', {
    pageType: 'video',
    previousPage: page1,
    pageTitle: 'Video Number 1!',
    video: server.create('video', {
      vimeoId: 76311230
    })
  });

  const page3 = server.create('page', {
    pageType: 'question',
    previousPage: page2,
    question: server.create('question', {
      questionText: 'Who is Taylor?',
      answerOptions: [0, 3],
      images: [
        '/images/taylor-question/image-1.jpeg',
        '/images/taylor-question/image-2.jpeg',
        '/images/taylor-question/image-3.jpeg',
        '/images/taylor-question/image-4.jpeg'
      ]
    })
  });

  const page4 = server.create('page', {
    pageType: 'proceed',
    pageTitle: 'Yay!!!',
    pageText: 'Yes, that was correct!',
    proceedText: 'NEXT VIDEO!',
    previousPage: page3
  });

  server.create('page', {
    pageType: 'proceed',
    pageTitle: 'Birthday Jam',
    pageText: 'ALLLLL DONE!',
    previousPage: page4
  });
}
