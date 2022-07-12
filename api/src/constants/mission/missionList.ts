import { IMissionData } from "../../interfaces/mission/IMissionData";

const MISSION_RANDOM_TIME_MULTIPLIER = 5;

export const MISSION_LIST: Array<IMissionData> = [{
  name: 'Kill \'Em All',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (5 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 100,
    money: 8
  }
}, {
  name: 'Ride the Lightning',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (2 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 40,
    money: 15
  }
}, {
  name: 'Master of Puppets',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (7 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 150,
    money: 3
  }
}, {
  name: 'Show no Mercy',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (9 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 90,
    money: 19
  }
}, {
  name: 'Hell Awaits',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (6 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 110,
    money: 9
  }
}, {
  name: 'Regin in Blood',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (10 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 200,
    money: 12
  }
}, {
  name: 'Follow the Reaper',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (10 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 160,
    money: 18
  }
}, {
  name: 'Are You Dead Yet?',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non vehicula enim. Vivamus pharetra posuere nunc feugiat volutpat. Donec sit amet purus ante.',
  durationInSecounds: (6 + (Math.floor(Math.random()* MISSION_RANDOM_TIME_MULTIPLIER) + 1)) * 60,
  reward: {
    experience: 120,
    money: 6
  }
}]