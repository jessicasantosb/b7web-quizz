import { QuestionItemProps } from "@/types/question";
import { useState } from "react";

export function QuestionItem({ question, count, onAnswer }: QuestionItemProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    console.log(key);

    if (key !== null) {
      setSelectedAnswer(key);
      onAnswer(key);
    }
  };

  const alreadySelected = selectedAnswer !== null;
  const rigthAnswer = alreadySelected && selectedAnswer === question.answer;
  const wrongAnswer = alreadySelected && selectedAnswer !== question.answer;

  return (
    <div className="pb-6">
      <h3 className="pb-2">
        {count}. {question.question}
      </h3>

      {question.options.map((option, key) => {
        return (
          <label
            key={key}
            className={`p-2 mb-2 flex gap-2 cursor-pointer bg-blue-100 hover:opacity-70
              ${alreadySelected && "cursor-auto"}
              ${rigthAnswer && selectedAnswer === key && "bg-green-100"}
              ${wrongAnswer && selectedAnswer === key && "bg-red-100"}
              `}
          >
            <input
              type="radio"
              name={question.question}
              value={option}
              onChange={() => checkQuestion(key)}
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}
