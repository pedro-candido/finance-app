import { createStackNavigator } from "@react-navigation/stack";

import { TUnloggedStackParamList, EUnloggedStackScreens } from "./index.types";
import { Login } from "../Screens/Login";

const { Navigator, Screen } = createStackNavigator<TUnloggedStackParamList>();

export const UnloggedStack = () => (
  <Navigator
    initialRouteName={EUnloggedStackScreens.LOGIN}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name={EUnloggedStackScreens.LOGIN} children={Login} />
    <Screen name={EUnloggedStackScreens.REGISTER} children={() => <></>} />
    <Screen
      name={EUnloggedStackScreens.FORGOT_PASSWORD}
      children={() => <></>}
    />
    <Screen
      name={EUnloggedStackScreens.RESET_PASSWORD}
      children={() => <></>}
    />
    <Screen
      name={EUnloggedStackScreens.RESET_PASSWORD_SUCCESS}
      children={() => <></>}
    />
    <Screen
      name={EUnloggedStackScreens.REGISTER_SUCCESS}
      children={() => <></>}
    />
    <Screen name={EUnloggedStackScreens.LOGIN_SUCCESS} children={() => <></>} />
    <Screen
      name={EUnloggedStackScreens.FORGOT_PASSWORD_SUCCESS}
      children={() => <></>}
    />
    <Screen
      name={EUnloggedStackScreens.FORGOT_PASSWORD_EMAIL_SENT}
      children={() => <></>}
    />
    <Screen name={EUnloggedStackScreens.ERROR} children={() => <></>} />
  </Navigator>
);
