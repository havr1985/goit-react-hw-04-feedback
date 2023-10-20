import { StatContainer, Stat } from "./Statistic.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatContainer>
            <Stat>Good: {good}</Stat>
            <Stat>Neutral: {neutral}</Stat>
            <Stat>Bad: {bad}</Stat>
            <Stat>Total: {total}</Stat>
            <Stat>Positive Percentage: {positivePercentage}</Stat>
        </StatContainer>
    )
}