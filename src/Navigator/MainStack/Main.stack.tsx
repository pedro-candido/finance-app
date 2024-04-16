import { createStackNavigator } from "@react-navigation/stack";

import { EAllStacks, TAllStacksParamList } from "./index.types";
import { UnloggedStack } from "../Unlogged/Unlogged.stack";
import { useGlobalStore } from "../../Stores/GlobalStore";

const { Navigator, Group, Screen } =
  createStackNavigator<TAllStacksParamList>();

export const MainStack = () => {
  const { isUserLoggedIn } = useGlobalStore();

  return (
    <Navigator
      initialRouteName={EAllStacks.UNLOGGED}
      screenOptions={{
        headerShown: false,
      }}
    >
      {isUserLoggedIn ? (
        <></>
      ) : (
        <>
          <Screen name={EAllStacks.UNLOGGED} children={UnloggedStack} />
        </>
      )}
    </Navigator>
  );
};
