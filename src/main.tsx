import * as React from "react";
import { Text } from "react-native";
export const sum = (a: number, b: number) => a + b;

export type SumProps = { a: number; b: number };

export const Sum: React.StatelessComponent<SumProps> = ({ a, b }) => {
  return (
    <Text>
      Sum of {a} and {b} is {sum(a, b)}
    </Text>
  );
};

// export class Sum extends React.Component<SumProps, {}> {
//   render() {
//     return <>{sum(a, b)}</>;
//   }
// }

Sum.defaultProps = {
  a: 0,
  b: 0
};
