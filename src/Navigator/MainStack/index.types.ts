export enum EAllStacks {
  UNLOGGED = "Unlogged",
  MAIN = "Main",
}

export type TAllStacksParamList = {
  [EAllStacks.UNLOGGED]: undefined;
  [EAllStacks.MAIN]: undefined;
};
