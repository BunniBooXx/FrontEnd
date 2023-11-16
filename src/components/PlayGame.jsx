// In your React component
import React from 'react';

const PlayGamePage = () => {
    return (
        <div>
            {/* Your React components or page content */}
            <iframe
                title="Ren'Py Game"
                src="http://localhost:8000/renpy/game/index.html"  // Adjust the URL as needed
                width="800"
                height="600"
            />
        </div>
    );
};

export default PlayGamePage;
