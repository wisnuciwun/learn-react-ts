// type RandomNumberProps = {
//     value: number
//     isPositive: boolean
//     isNegative?: boolean
//     isZero?: boolean
// }

type RandomNumberProps = PositiveNumber | NegativeNumber

type RandomNumberType = { //put here if value is a must
    value: number,
    isZero: boolean
}

type PositiveNumber = RandomNumberType & { isPositive?: boolean, isNegative?: never } // when is positive true, is negative is must not exist

type NegativeNumber = RandomNumberType & { isPositive?: never, isNegative?: boolean } // when is negative true, is positive is must not exist

export const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
return(
    <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
)
}