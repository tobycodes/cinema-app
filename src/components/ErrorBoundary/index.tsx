import ErrorPage from 'pages/error';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { connect } from 'react-redux';
import * as Sentry from '@sentry/react';

import { clearError } from 'redux/actions/movies';
import { RootState } from 'types/app';
import { isProd } from 'utils/isProd';

type IProps = { children: ReactNode[]; clearError: (error: RootState['error']) => void };

export class ErrorBoundary extends Component<IProps> {
  state = {
    hasError: false,
    eventId: null
  };

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

  clearState = () => {
    this.setState({ hasError: false });
    this.props.clearError({ message: '', statusCode: null });
  };

  render() {
    if (this.state.hasError) return <ErrorPage clearErrorState={this.clearState} />;

    return this.props.children;
  }
}

export default connect(null, { clearError })(ErrorBoundary);
