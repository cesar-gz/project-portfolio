import React from 'react';
import errorPicture from '../assets/images/error.png';

class ErrorBoundary extends React.Component{

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update the state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // I can add a 3rd error logging/reporting service here
    console.log('Error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // you can render any custom fallback UI here
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1>Oops! Something went wrong!</h1>
          <img
            src={errorPicture}
            alt="error illustration"
            style={{ maxWidth: '25%', height: '25%' }}
          />
          <p style={{color:'white', fontSize: '1.4em'}}>I am sorry for the inconvenience. Please try again later or leave me a message in my contact form.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
