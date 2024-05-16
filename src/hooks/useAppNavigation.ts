import { useNavigate } from "react-router-dom";

type IBaseProps = {
  screen?: string;
};

type INavigateProps = {
  screen: string;
  props?: any;
};

const useNavigation = () => {
  const routeNavigate = useNavigate();

  function navigate({ screen, props }: INavigateProps) {
    let targetScreen = screen;
    if (!targetScreen.startsWith("/")) {
      targetScreen = `/${targetScreen}`;
    }

    routeNavigate(targetScreen, { state: props });
  }

  function goBack({ screen }: IBaseProps) {
    if (screen) {
      navigate({ screen });
      return;
    }

    routeNavigate(-1);
  }

  function canGoBack() {
    if (window.history.state && window.history.state.idx > 0) {
      return true;
    }

    return false;
  }

  function setOptions(options: any) {}

  function dispatchAction(action: any) {}

  return {
    navigate: (props: INavigateProps) => navigate(props),
    goBack: (props: IBaseProps) => goBack(props),
    canGoBack: () => canGoBack(),
    setOptions: (options: any) => setOptions(options),
    dispatchAction: (action: any) => dispatchAction(action),
  };
};

export default useNavigation;
