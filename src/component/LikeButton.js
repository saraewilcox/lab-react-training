import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0
    };

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count +1
        })
    };

    render () {
        return (
            <div>
                <h2>The count is: {this.state.count}</h2>
                <button onClick={this.handleIncrementClick}>+</button>
            </div>
        )
    }
}

export default LikeButton