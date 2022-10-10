export const QuizTopic = async () => {
  const topics = await fetch('https://openapi.programming-hero.com/api/quiz');
  const data = await topics.json();

  return data;
}