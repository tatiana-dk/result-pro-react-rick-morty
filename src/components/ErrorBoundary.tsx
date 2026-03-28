import { Component, type ErrorInfo, type ReactNode } from "react";

interface State {
    hasError: boolean;
}

interface Props {
    children: ReactNode;
}

class ErrorBoundary extends Component<Props> {
    state: State;

    constructor(props: {children: ReactNode}) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.warn(error);
        console.warn(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h4>Something went wrong.</h4>;
        }
        return this.props.children;
    }
};

export default ErrorBoundary;