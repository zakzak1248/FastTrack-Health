import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    // Set the target date for your event (replace with your desired date)
    this.targetDate = new Date('2023-09-20T00:00:00Z');
    this.startDate = new Date('2023-09-18T00:00:00Z');

    this.state = {
      timeRemaining: this.calculateTimeRemaining(),
      timeElapsed: this.calculateTimeElapsed(),
    };
  }

  componentDidMount() {
    // Update the countdown every second
    this.interval = setInterval(() => {
      this.setState({
         timeRemaining: this.calculateTimeRemaining() ,
         timeElapsed: this.calculateTimeElapsed(),
        });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }


  calculateTimeElapsed() {
    const now = new Date();
    const timeDifference = now - this.startDate ;


    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  calculateTimeRemaining() {
    const now = new Date();
    const timeDifference = this.targetDate - now;

    if (timeDifference <= 0) {
      // The event has passed
      return 'Time to refeed';
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  render() {
    return (
      <View>
        <Text>Time Remaining till refeed:</Text>
        <Text>{this.state.timeRemaining}</Text>
        <Text>Time Elapsed since last refeed:</Text>
        <Text>{this.state.timeElapsed}</Text>
      </View>
    );
  }
}

export default CountdownTimer;
