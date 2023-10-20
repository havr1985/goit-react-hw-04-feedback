import { StatContainer, Stat } from "./Statistic.styled";

export const Statistics = ({ state, total, positivePercentage}) => {
    return (
        <StatContainer>
            <Stat>Good: {state.good}</Stat>
            <Stat>Neutral: {state.neutral}</Stat>
            <Stat>Bad: {state.bad}</Stat>
            <Stat>Total: {total}</Stat>
            <Stat>Positive Percentage: {positivePercentage}</Stat>
        </StatContainer>
    )
}