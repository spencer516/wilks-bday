export default function (server) {
  const chainer = makeChainer(server);

  chainer({ isFirstPage: true })
    .video(4117716490) // Mer did. Please check
    .continue()
    .video(411598051)
    .question(
      "Where do Adam, Cici and Baby Cole live?",
      [1],
      [
        '/images/prompt2/1.jpg',
        '/images/prompt2/2.jpg',
        '/images/prompt2/3.jpg',
        '/images/prompt2/4.jpg',
      ]
    )
    .video(411598128)
    .continue()
    .video(411598262)
    .question(
      'Select your favorite photo with Nonny or Poppy!',
      [0, 1, 2, 3],
      [
        // Mer did. Check!
        '/images/prompt3/nonny1.png',
        '/images/prompt3/poppy1.jpg',
        '/images/prompt3/poppy2.jpg',
        '/images/prompt3/nonny2.png',
      ]
    )
    .video(410563329)
    .continue()
    .video(410564173)
    .question(
      'Pick your favorite team!',
      [3],
      [
        '/images/prompt4/alabama.png',
        '/images/prompt4/ohiostate.png',
        '/images/prompt4/uk.png',
        '/images/prompt4/ut.png',
      ]
    )
    .video(410564694)
    .continue()
    .video(410565042)
    .question(
      'What is your favorite lunch place?',
      [2],
      [
        '/images/prompt5/bk.png',
        '/images/prompt5/kfc.png',
        '/images/prompt5/mcdonalds.jpg',
        '/images/prompt5/wendy.png',
      ]
    )
    .video(410565288)
    .continue()
    .video(410565886)
    .question(
      'What is your favorite sport?',
      [0],
      [
        '/images/prompt6/golf.jpg',
        '/images/prompt6/hockey.jpg',
        '/images/prompt6/soccer.jpg',
        '/images/prompt6/tennis.png',
      ]
    )
    .video(410565964)
    .continue()
    .video(410566712)
    .question(
      'Which one is Oakley?',
      [1],
      [
        '/images/prompt7/bengals.jpg',
        '/images/prompt7/colt.png',
        '/images/prompt7/reds.jpg',
        '/images/prompt7/wildcat.jpg',
      ]
    )
    .video(410566765)
    .continue()
    .video(410566804)
    .question(
      "Which pet lives at DotDot and Mia's?",
      [3],
      [
        '/images/prompt8/bunnies.jpg',
        '/images/prompt8/cat.jpg',
        '/images/prompt8/dog.jpg',
        '/images/prompt8/turtle.jpg',
      ]
    )
    .video(410566839)
    .continue()
    .video(410566871)
    .question(
      'Who is your favorite Superhero?',
      [0, 1, 2, 3],
      [
        '/images/prompt9/black panther.jpg',
        '/images/prompt9/captainamerica.png',
        '/images/prompt9/ironman.png',
        '/images/prompt9/spiderman.jpg',
      ]
    )
    .video(411599487)
    .continue()
    .video(411716297) // Mer added. Double check.
    .next({
      pageType: 'proceed',
      pageText: 'YOU DID IT! HAPPY BIRTHDAY!'
    })
}

function makeChainer(server) {
  return function chainPic(opts) {
    const previousPage = server.create('page', opts);

    return {
      next(opts) {
        return chainPic({ ...opts, previousPage });
      },
      continue() {
        return chainPic({
          previousPage,
          pageType: 'proceed',
          proceedText: 'Continue!',
        })
      },
      video(vimeoId) {
        return chainPic({
          previousPage,
          pageType: 'video',
          video: server.create('video', { vimeoId })
        })
      },
      question(questionText, answerOptions, images) {
        return chainPic({
          previousPage,
          pageType: 'question',
          question: server.create('question', {
            questionText,
            answerOptions,
            images
          })
        })
      }
    }
  }
}

