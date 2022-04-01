import React, { Component } from 'react';
class MyErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, info) {
        console.log(error);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div style={{ flex: 1, backgroundColor: 'rgba(154, 82, 120, .1)', height: '100vh' }}>
                    <div style={{ display: 'flex-col', textAlign: 'center', color: '#9A5278' }}>
                        <img src='/404.png' alt='user' style={{ height: 280, marginTop: '50px' }} />
                        <h1 style={{ textAlign: 'center' }}>Aaaah! Something went wrong</h1>
                        <p>Brace yourself till we get the error fixed</p>
                        <p>Yoy may also refresh the page or try again later.</p>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}
export default MyErrorBoundary;