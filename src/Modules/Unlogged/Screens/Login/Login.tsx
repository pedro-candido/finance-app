import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Button, Text, View } from "tamagui";
import { Field } from "../../../Common/Components/Field/Field";
import { useCheckErrors } from "../../../../Utils/hooks/useCheckErrors";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export const Login = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { hasEmailError, hasError } = useCheckErrors();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View flex={1} marginLeft={10} width={"95%"} justifyContent="center">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Field
                label="E-mail"
                placeholder="example@org.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name={"email"}
          />
          {errors.email && <Text>This is required.</Text>}

          {/* <Field
            marginBottom="$2"
            label="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
          /> */}
          <Button
            disabled={hasError}
            backgroundColor={"$blue10"}
            outlineColor={"$black1"}
            color={"$white1"}
          >
            Entrar
          </Button>
          <StatusBar />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
