import React, { useEffect, useState } from 'react';
import socket from './socket';
import SystemMetrics from './components/SystemMetrics';

function App() {
    const [metrics, setMetrics] = useState({});

    useEffect(() => {
        socket.on('systemMetrics', (data) => {
            setMetrics(data);
        });

        return () => {
            socket.off('systemMetrics');
        };
    }, []);

    return (
        <div className="App">
            <h1>Atlantis - Real-Time Monitoring</h1>
            <SystemMetrics metrics={metrics} />
        </div>
    );
}

export default App;
