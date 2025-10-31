import React, { useState, useEffect } from 'react';

interface DateTimeProps {
    className?: string;
}

const DateTime: React.FC<DateTimeProps> = ({ className }) => {
    const [currentTime, setCurrentTime] = useState<string>(new Date().toISOString().slice(0, 19).replace('T', ' '));
    
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now.toISOString().slice(0, 19).replace('T', ' '));
        }, 1000);
        
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`text-sm ${className || ''}`}> 
            <p className="text-gray-600">
                Current Date and Time (UTC):{' '}
                <span className="font-medium">{currentTime}</span>
            </p>
            <p className="text-gray-600">
                Current User's Login:{' '}
                <span className="font-medium">Waqar-743</span>
            </p>
        </div>
    );
};

export default DateTime;