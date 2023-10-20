import { BtnContainer, Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <BtnContainer>
            <Btn type="button" onClick={() => onLeaveFeedback(options[0])}>Good</Btn>
            <Btn type="button" onClick={() => onLeaveFeedback(options[1])}>Neutral</Btn>
            <Btn type="button" onClick={() => onLeaveFeedback(options[2])}>Bad</Btn>
        </BtnContainer>
    )
}
