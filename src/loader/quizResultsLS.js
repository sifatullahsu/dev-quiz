export const getQuizResultsLS = () => {
  const getFromLS = localStorage.getItem('quiz-results');
  return getFromLS ? JSON.parse(getFromLS) : [];
}

export const setQuizResultsLS = (data) => {
  localStorage.setItem('quiz-results', JSON.stringify(data));
}