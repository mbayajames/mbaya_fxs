import React, { Component, ErrorInfo, ReactNode } from "react";
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="text-center max-w-2xl mx-auto px-6 animate-slide-up">
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              <span className="text-blue-600 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Oops!</span> Something Went Wrong
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              An unexpected error occurred. Please try refreshing the page or contact our support team.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 animate-pulse"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-gray-100 rounded-2xl p-6 shadow-inner">
                <summary className="cursor-pointer text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  Error Details
                </summary>
                <pre className="mt-4 text-xs text-gray-700 bg-white p-4 rounded-lg shadow-sm overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;