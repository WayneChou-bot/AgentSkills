import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-slate-900 text-white min-h-screen font-mono">
                    <h1 className="text-2xl text-red-500 mb-4">💥 Application Crashed</h1>
                    <div className="bg-black p-4 rounded border border-red-500/30 overflow-auto">
                        <h2 className="text-xl text-yellow-500 mb-2">{this.state.error && this.state.error.toString()}</h2>
                        <pre className="text-xs text-gray-400 whitespace-pre-wrap">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
