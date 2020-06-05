import lastEvent from "../utils/lastEvent";
import selector from "../utils/selector";
import stack, { getStackInfo } from "../utils/stack";
import tracker from "../utils/tracker";

export const getReact = (React) => {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { e: false };
    }
    componentDidCatch(e) {
      let lastEventValue = lastEvent();
      this.setState({ e });
      const { message } = e;
      tracker.send({
        catorage: "exception",
        function: "react",
        type: "react",
        message,
        stack: stack(e.stack || (e.error && e.error.stack) || ""),
        ...getStackInfo(e.stack),
        selector: lastEventValue ? selector(lastEventValue.path) : "",
      });
    }

    render() {
      if (this.state.e) {
        const { FallbackComponent } = this.props;
        if (FallbackComponent) return React.createElement(FallbackComponent);
        window.location.href = "/";
        return null;
      }
      return this.props.children;
    }
  };
};
