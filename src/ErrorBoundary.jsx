import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          minHeight: '100vh', background: '#050309', color: '#f1ecdf',
          fontFamily: "'OCR A Extended', monospace", textAlign: 'center', padding: '40px',
        }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#8a8275', marginBottom: 20 }}>
              Aethel · System Anomaly
            </div>
            <h1 style={{ fontSize: 28, marginBottom: 16, letterSpacing: '0.06em' }}>
              The void encountered an error.
            </h1>
            <p style={{ color: '#8a8275', marginBottom: 32, maxWidth: '40ch', margin: '0 auto 32px' }}>
              Something broke in the descent. Reload the page to re-enter the world.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: 'transparent',
                border: '1px solid rgba(217,184,122,0.4)',
                color: '#d9b87a', padding: '12px 28px', cursor: 'pointer',
                letterSpacing: '0.24em', fontSize: 11, textTransform: 'uppercase',
                fontFamily: 'inherit',
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
