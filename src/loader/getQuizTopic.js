export const getQuizTopic = async () => {
  const topics = await fetch('https://openapi.programming-hero.com/api/quiz');
  // const topics = await fetch('quiz.json');
  const data = await topics.json();

  return data;
}