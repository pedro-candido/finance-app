import { createStackNavigator } from "@react-navigation/stack";

import { EAllStacks, TAllStacksParamList } from "./index.types";
import { UnloggedStack } from "../../Modules/Unlogged/Navigator";
import { useBoundStore } from "../../Stores/useBoundStore";

const { Navigator, Screen } = createStackNavigator<TAllStacksParamList>();

export const MainStack = () => {
  const { isUserLoggedIn } = useBoundStore();

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
