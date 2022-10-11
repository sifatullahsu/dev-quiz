export const getQuiz = async (id) => {
  const topics = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
  const data = await topics.json();

  return data;
}