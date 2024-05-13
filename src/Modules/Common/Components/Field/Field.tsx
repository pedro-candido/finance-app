import { useState } from "react";
import { Input, Text, View } from "tamagui";
import { IFieldProps } from "./Field.types";

export const Field = ({ label, value = "", ...props }: IFieldProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <Input {...props} />
    </View>
  );
};
