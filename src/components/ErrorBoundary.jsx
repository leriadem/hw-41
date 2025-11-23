import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary перехватил ошибку:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 16, color: "crimson" }}>
          <h2>Сталася помилка</h2>
          <p>{this.state.error?.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: "8px 12px",
              background: "#eee",
              border: "1px solid #aaa",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Спробувати ще раз
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
