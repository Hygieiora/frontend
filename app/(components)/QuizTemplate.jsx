import clsx from "clsx";
import { useRouter } from "next/navigation";

const QuizTemplate = ({
  quiz,
  question,
  options,
  questionNumber,
  nextQuestionNumber,
  handleAnswer,
}) => {
  const router = useRouter();
  return (
    <main className={clsx("flex flex-col gap-4 ")}>
      <div className="text-center">
        <h1 className="font-bold text-2xl">{question}</h1>
      </div>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              handleAnswer(questionNumber, option);
            }}
            className={clsx(
              "border-2 border-blue-400 bg-white p-2 rounded-md",
              " hover:bg-blue-100 transition-all duration-300"
            )}
          >
            {option}
          </button>
        ))}
      </div>
      <div>
        <button
          className="bg-blue-500 text-white font-bold p-2 rounded-md hover:bg-blue-600 transition-all duration-300"
          onClick={() => {
            questionNumber === quiz.length
              ? router.push("/appointments")
              : nextQuestionNumber();
          }}
        >
          {questionNumber === quiz.length ? "Submit" : "Continue"}
        </button>
      </div>
    </main>
  );
};

export default QuizTemplate;
