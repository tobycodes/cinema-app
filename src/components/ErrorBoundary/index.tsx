import ErrorPage from 'pages/error';
import { Component, ErrorInfo } from 'react';
import * as Sentry from '@sentry/react';

import { isProd } from 'utils/isProd';

export class ErrorBoundary extends Component {
  state = { hasError: false, eventId: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (isProd()) {
      Sentry.withScope((scope) => {
        scope.setTag('Error source', 'ErrorBoundary');
        scope.setLevel(Sentry.Severity.Error);
        scope.setExtras({ errorInfo });
        const eventId = Sentry.captureException(error);

        this.setState({ hasError: true, eventId });
      });
    } else {
      this.setState({ hasError: true });
    }
  }

  clearState = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) return <ErrorPage onClearError={this.clearState} />;

    return this.props.children;
  }
}

export default ErrorBoundary;
