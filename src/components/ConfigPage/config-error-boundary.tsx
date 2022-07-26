import React from "react";
import { Alert, Row, Typography } from "antd";
const { Link } = Typography;

class ConfigErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: any) {
    window.Twitch.ext.rig.log(`State from error`, error);
    // Update state so the next render will show the fallback UI.1
    return { hasError: true, errorMessage: error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    window.Twitch.ext.rig.log(`There was an error`, error, errorInfo);
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this.state.hasError) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const errorMessage = this.state.errorMessage;

      // You can render any custom fallback UI
      return (
        <Row justify="center" style={{ paddingTop: "10px" }}>
          <Alert
            type={"error"}
            message={"There was an error rendering the component."}
            description={
              <div>
                <div>
                  Please refresh the app (press F5). If the problem persists after refreshing the
                  page, please reach out to the support in our{" "}
                  <Link
                    href={"https://discord.gg/jRrnwqMfkr"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </Link>
                  . Or check coh2stats.com for help.{" "}
                </div>
                <div>{JSON.stringify(errorMessage)}</div>
              </div>
            }
          />
        </Row>
      );
    }

    return this.props.children;
  }
}

export { ConfigErrorBoundary };
