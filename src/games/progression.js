import run from "../index.js";

const gameRule = 'What number is missing in the progression?'

const getRandomIntervalBetween = (min, max) => Math.round(Math.random() * (max - min) + min);

const getResultProgression = () => {
    const result = [];
    const arrayLength = getRandomIntervalBetween(5, 10);
    const firstNumber = getRandomIntervalBetween(1, 20);
    const randomProgression = getRandomIntervalBetween(1, 10);
    result.push(firstNumber);
    for (let i = 1; i < arrayLength; i += 1) {
        result.push(0);
    }
    for (let i = 1; i < arrayLength; i += 1) {
        result[i] = result[i - 1] + randomProgression;
    }
    return result;
};

const takeRandomElementFromProgression = (progression) => {
    const index = getRandomIntervalBetween(0, progression.length - 1);
    return progression[index];
};

const removeElementFromProgression = (progression, element) => {
    const clientProgression = [];
    const index = progression.findIndex((el) => el === element);
    for (let i = 0; i < progression.length; i += 1) {
        if (i !== index) {
            clientProgression.push(progression[i]);
        } else {
            clientProgression.push('..');
        }
    }
    return clientProgression;
};

const getQuestionValue = () => {
    const progression = getResultProgression();
    const randomElementFromProgression = takeRandomElementFromProgression(progression);
    const correctAnswer = randomElementFromProgression;
    const question = removeElementFromProgression(progression, randomElementFromProgression);
    console.log(correctAnswer, 'question')
    return [question.join(' '), String(correctAnswer)]
}

const runProgressionGame = () => {
    run(gameRule, getQuestionValue)
}
export default runProgressionGame