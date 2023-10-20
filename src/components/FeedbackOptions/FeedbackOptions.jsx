import { BtnContainer, Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <BtnContainer>
            <Btn type="button" onClick={() => onLeaveFeedback('good')}>Good</Btn>
            <Btn type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</Btn>
            <Btn type="button" onClick={() => onLeaveFeedback('bad')}>Bad</Btn>
        </BtnContainer>
    )
}
